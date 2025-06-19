// noinspection HtmlDeprecatedTag,XmlDeprecatedElement

import type {NextApiRequest, NextApiResponse} from "next";
import Telegram from "@/utils/telegram";

interface MessageData {
	update_id: number,
	message: {
		message_id: number,
		from: {
			id: number,
			is_bot: boolean,
			first_name: string,
			last_name: string,
			username: string,
			language_code: string
		},
		chat: {
			id: number,
			first_name: string,
			last_name: string,
			username: string,
			type: string
		},
		date: number,
		text: string
	}
}

function cancel(res: NextApiResponse, status: number): void {
	res.status(status).end();
}

export default async function telegramWebHook(req: NextApiRequest, res: NextApiResponse) {
	if(req.method !== "POST") return cancel(res, 405);

	const secretToken = req.headers["x-telegram-bot-api-secret-token"];

	if(secretToken !== process.env.TELEGRAM_SECRET_TOKEN) return cancel(res, 403);

	if(!req.body || !req.body.message) return cancel(res, 405);

	const {
		chat,
		from,
		text
	} = req.body.message as MessageData["message"];

	await Telegram.sendMessage({
		chatId: chat.id,
		text: `
			Ваш ID: ${from.id}
			Вы написали: ${text}
		`
	});

	return cancel(res, 200);
}