/* eslint-disable camelcase */
import axios from "axios";
import type {AxiosRequestConfig} from "axios";

interface SendMessageParams {
	chatId: number
	text: string
	reply_markup?: {
		inline_keyboard: Array<{
			text: string
			callback_data: string
		}>
	}
}

export default class Telegram {
	private static readonly BASE_URL: string = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}`;

	private static readonly axiosRequestConfig: AxiosRequestConfig = {
		baseURL: Telegram.BASE_URL
	};

	private static readonly axiosInstance = axios.create(Telegram.axiosRequestConfig);

	public static async sendMessage({chatId, text, reply_markup}: SendMessageParams) {
		text = text.replace(/\t/g, "").trim();

		return Telegram.axiosInstance.post("/sendMessage", null, {
			params: {
				"chat_id": chatId,
				"parse_mode": "html",
				"link_preview_options": JSON.stringify({
					"is_disabled": true
				}),
				"text": text,
				"reply_markup": reply_markup
			}
		});
	}
}