/* eslint-disable camelcase */
// noinspection HtmlDeprecatedTag,XmlDeprecatedElement

import type {NextApiRequest, NextApiResponse} from "next";
import Telegram from "@/utils/telegram";
import {FacultiesData} from "@/assets/data/faculties";
import {SpecialtiesData} from "@/assets/data/specialties";
import {validateUrl} from "@/utils/helpers";
import {ContactsData, HotlineContactsData} from "@/assets/data/contacts";
import AppNavigation from "@/assets/data/appNavigation";

interface Body {
	update_id: number,
	message?: {
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
	callback_query?: {
		id: string,
		from: {
			id: number,
			is_bot: boolean,
			first_name: string,
			last_name: string
			username: string,
			language_code: string
		},
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
		},
		chat_instance: string,
		data: string
	}
}

function cancel(res: NextApiResponse, status: number): void {
	res.status(status).end();
}

export default async function telegramWebHook(req: NextApiRequest, res: NextApiResponse) {
	if(req.method !== "POST") return cancel(res, 405);

	const secretToken = req.headers["x-telegram-bot-api-secret-token"];

	if(secretToken !== process.env.TELEGRAM_SECRET_TOKEN) return cancel(res, 403);

	let command = null;
	let chatId = null;

	if(req.body) {
		const body = req.body as Body;

		if(body.message) {
			command = body.message.text;
			chatId = body.message.chat.id;
		} else if(body.callback_query) {
			command = body.callback_query.data;
			chatId = body.callback_query.message.chat.id;
		}
	}

	if(!command || !chatId) return cancel(res, 405);

	if(command === "/start" || command === "/help") {
		await Telegram.sendMessage({
			chatId: chatId,
			text: `
				Это бот площадки ИТ-Абитуриент 2026 ГГУ им. Ф. Скорины.
				Воспользуйтесь любой из доступных команд.
			`,
			reply_markup: {
				inline_keyboard: [
					[
						{
							text: "Получить список команд",
							callback_data: "/help"
						}
					],
					[
						{
							text: "Список актуальных ИТ-специальностей",
							callback_data: "/specialties"
						}
					],
					[
						{
							text: "Контакты приемной комиссии",
							callback_data: "/contacts"
						}
					],
					[
						{
							text: "График работы приемной комиссии",
							callback_data: "/schedule"
						}
					],
					[
						{
							text: "Полезные ссылки",
							callback_data: "/links"
						}
					]
				]
			}
		});

		return cancel(res, 200);
	}

	if(command === "/specialties") {
		for await (const faculty of FacultiesData) {
			const specialties = SpecialtiesData.filter(spec => spec.faculty_id === faculty.id);

			await Telegram.sendMessage({
				chatId: chatId,
				text: `<a href='${validateUrl("/faculties#" + faculty.id)}'>${faculty.name}</a>`,
				reply_markup: {
					inline_keyboard: specialties.map(specialty => [
						{
							text: specialty.name,
							url: validateUrl(specialty.id)
						}
					])
				}
			});
		}

		return cancel(res, 200);
	}

	if(command === "/contacts") {
		await Telegram.sendMessage({
			chatId: chatId,
			text: `
				Контактная информация
				
				${ContactsData.map(contact => `
					<b>${contact.position}</b>
					${contact.name}
					Аудитория: ${contact.cabinet}
					Телефон: ${contact.number}
				`.trim()).join("\n\n")}
			`
		});

		await Telegram.sendMessage({
			chatId: chatId,
			text: `
				Горячая линия
				
				${HotlineContactsData.map(contact => `
					<b>${contact.name}</b>
					Телефон: ${contact.number}
				`.trim()).join("\n\n")}
			`
		});

		return cancel(res, 200);
	}

	if(command === "/schedule") {
		await Telegram.sendMessage({
			chatId: chatId,
			text: `
				График работы приемной комиссии
				
				г. Гомель, ул. Советская, 102, корпус № 5
				с 9-00 до 18-00, без перерыва на обед. включая
				субботы: 25 июля, 01 августа, 08 августа, 15 августа
				воскресенье: 25 июля
			`
		});

		return cancel(res, 200);
	}

	if(command === "/links") {
		await Telegram.sendMessage({
			chatId: chatId,
			text: `
				Полезные ссылки
			`,
			reply_markup: {
				inline_keyboard: AppNavigation.map(navItem => [
					{
						text: navItem.name,
						url: validateUrl(navItem.path)
					}
				])
			}
		});

		return cancel(res, 200);
	}

	return cancel(res, 200);
}