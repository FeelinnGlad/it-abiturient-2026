import {StaticImageData} from "next/image";
import facIcon1 from "@/assets/images/fac-icon-1.png";
import facIcon2 from "@/assets/images/fac-icon-2.png";
import facIcon3 from "@/assets/images/fac-icon-3.png";

type EducationForm = {
	budget_form: number | null;
	paid_form: number | null;
};

type AdmissionPlanItem = {
	spec_id: string;
	full_time_ed: EducationForm;
	part_time_ed?: EducationForm;
	part_time_ed_short?: EducationForm;
};

type ContactInfo = {
	address: string;
	post_address: string;
	phone: string;
	email: string;
};

type DeanInfo = {
	name: string;
	phone: string;
	email: string;
};

type PassingGradeYear = {
	budget_form: number | null;
	paid_form: number | null;
};

type PassingGradeItem = {
	"2022": PassingGradeYear;
	"2023": PassingGradeYear;
	spec_id: string;
};

type AdditionalInfoItem = {
	title: string;
	info: string;
};

type Faculty = {
	id: string
	logo: StaticImageData
	name_en: string;
	name: string;
	admission_plan: AdmissionPlanItem[];
	contact_info: ContactInfo;
	dean: DeanInfo;
	passing_grades: PassingGradeItem[];
	cost: number;
	additional_info: AdditionalInfoItem[];
};

export const FacultiesData: Array<Faculty> = [
	{
		"id": "0",
		"logo": facIcon1,
		"name_en": "Mathematics and programming technologies",
		"name": "Факультет математики и технологий программирования",
		"admission_plan": [
			{
				"spec_id": "6-05-0612-01",
				"full_time_ed": {
					"budget_form": 20,
					"paid_form": 10
				},
				"part_time_ed": {
					"budget_form": 0,
					"paid_form": 15
				},
				"part_time_ed_short": {
					"budget_form": 7,
					"paid_form": 12
				}
			},
			{
				"spec_id": "6-05-0612-02",
				"full_time_ed": {
					"budget_form": 20,
					"paid_form": 10
				},
				"part_time_ed": {
					"budget_form": null,
					"paid_form": null
				},
				"part_time_ed_short": {
					"budget_form": null,
					"paid_form": null
				}
			},
			{
				"spec_id": "6-05-0533-09",
				"full_time_ed": {
					"budget_form": 18,
					"paid_form": 2
				},
				"part_time_ed": {
					"budget_form": null,
					"paid_form": null
				},
				"part_time_ed_short": {
					"budget_form": null,
					"paid_form": null
				}
			},
			{
				"spec_id": "6-05-0533-11",
				"full_time_ed": {
					"budget_form": 18,
					"paid_form": 2
				},
				"part_time_ed": {
					"budget_form": null,
					"paid_form": null
				},
				"part_time_ed_short": {
					"budget_form": null,
					"paid_form": null
				}
			}
		],
		"contact_info": {
			"address": "г. Гомель, ул. Кирова, 119, каб. 3-7, 3-8",
			"post_address": "ГГУ, факультет МиТП, ул. Советская, 104, 246019, г. Гомель",
			"phone": "+375 232 51 03 13",
			"email": "math@gsu.by; http://math.gsu.by"
		},
		"dean": {
			"name": "Жогаль Сергей Петрович, кандидат физико-математических наук, доцент",
			"phone": "+375 232 51 03 13",
			"email": "zhogal@gsu.by"
		},
		"passing_grades": [
			{
				"2022": {
					"budget_form": 328,
					"paid_form": 269
				},
				"2023": {
					"budget_form": 318,
					"paid_form": 195
				},
				"spec_id": "6-05-0612-01 (дневная)"
			},
			{
				"2022": {
					"budget_form": 212,
					"paid_form": 210
				},
				"2023": {
					"budget_form": 168,
					"paid_form": 154
				},
				"spec_id": "6-05-0612-01 (заочная)"
			},
			{
				"2022": {
					"budget_form": 224,
					"paid_form": 174
				},
				"2023": {
					"budget_form": 239,
					"paid_form": 210
				},
				"spec_id": "6-05-0612-01 (сокр. заочная)"
			},
			{
				"2022": {
					"budget_form": 316,
					"paid_form": 231
				},
				"2023": {
					"budget_form": 305,
					"paid_form": 215
				},
				"spec_id": "6-05-0612-02"
			},
			{
				"2022": {
					"budget_form": 295,
					"paid_form": 229
				},
				"2023": {
					"budget_form": 283,
					"paid_form": 230
				},
				"spec_id": "6-05-0533-11"
			},
			{
				"2022": {
					"budget_form": 249,
					"paid_form": null
				},
				"2023": {
					"budget_form": 269,
					"paid_form": null
				},
				"spec_id": "6-05-0533-09"
			}
		],
		"cost": 3783.84,
		"additional_info": [
			{
				"title": "Сведения о совместных лабораториях и научных центрах",
				"info": "На факультете функционируют 4 учебно-научно-исследовательских лаборатории, созданные совместно с ведущими ИТ-компаниями Парка высоких технологий «ЭПАМ Системз», «ИВА-Гомель-Парк», «Техартгруп», а также с ИТ-компанией «Эпселп»."
			},
			{
				"title": "Порядок предоставления общежития на факультете",
				"info": "Университет располагает тремя комфортабельными общежитиями, два из которых расположены в непосредственной близости от учебного корпуса, в котором находится факультет. Все нуждающиеся в общежитии иногородние студенты поселяются в нем уже с начала занятий на первом курсе. С правилами предоставления общежития можно ознакомиться здесь:\nhttp://abiturient.gsu.by/?page id=639&land=ru"
			}
		]
	},
	{
		"id": "1",
		"logo": facIcon2,
		"name_en": "Faculty of Physics and Information Technologies",
		"name": "Факультет физики и информационных технологий",
		"admission_plan": [
			{
				"spec_id": "6-05-0612-03",
				"full_time_ed": {
					"budget_form": 15,
					"paid_form": 10
				},
				"part_time_ed": {
					"budget_form": null,
					"paid_form": null
				},
				"part_time_ed_short": {
					"budget_form": 7,
					"paid_form": 13
				}
			},
			{
				"spec_id": "6-05-0611-05",
				"full_time_ed": {
					"budget_form": 13,
					"paid_form": 2
				},
				"part_time_ed": {
					"budget_form": null,
					"paid_form": null
				},
				"part_time_ed_short": {
					"budget_form": null,
					"paid_form": null
				}
			},
			{
				"spec_id": "6-05-0713-02",
				"full_time_ed": {
					"budget_form": 12,
					"paid_form": 1
				},
				"part_time_ed": {
					"budget_form": null,
					"paid_form": null
				},
				"part_time_ed_short": {
					"budget_form": null,
					"paid_form": null
				}
			},
			{
				"spec_id": "6-05-0533-04",
				"full_time_ed": {
					"budget_form": 12,
					"paid_form": 3
				},
				"part_time_ed": {
					"budget_form": null,
					"paid_form": null
				},
				"part_time_ed_short": {
					"budget_form": null,
					"paid_form": null
				}
			},
			{
				"spec_id": "6-05-0533-12",
				"full_time_ed": {
					"budget_form": 15,
					"paid_form": 3
				},
				"part_time_ed": {
					"budget_form": null,
					"paid_form": null
				},
				"part_time_ed_short": {
					"budget_form": null,
					"paid_form": null
				}
			},
			{
				"spec_id": "6-05-0533-01",
				"full_time_ed": {
					"budget_form": 12,
					"paid_form": null
				},
				"part_time_ed": {
					"budget_form": null,
					"paid_form": null
				},
				"part_time_ed_short": {
					"budget_form": null,
					"paid_form": null
				}
			},
			{
				"spec_id": "6-05-0533-01",
				"full_time_ed": {
					"budget_form": 11,
					"paid_form": null
				},
				"part_time_ed": {
					"budget_form": null,
					"paid_form": null
				},
				"part_time_ed_short": {
					"budget_form": null,
					"paid_form": null
				}
			}
		],
		"contact_info": {
			"address": "г. Гомель, ул. Советская, 102, каб. 2-9",
			"post_address": "ГГУ, факультет физики и ИТ, ул. Советская, 102, 246028, г. Гомель",
			"phone": "+375 232 50 38 59",
			"email": "phys_dec@gsu.by"
		},
		"dean": {
			"name": "Самофалов Андрей Леонидович, кандидат физико-математических наук, доцент",
			"phone": "+375 232 50 38 61",
			"email": "samofalov@gsu.by"
		},
		"passing_grades": [
			{
				"2022": {
					"budget_form": null,
					"paid_form": null
				},
				"2023": {
					"budget_form": 325,
					"paid_form": 187
				},
				"spec_id": "6-05-0612-03"
			},
			{
				"2022": {
					"budget_form": null,
					"paid_form": null
				},
				"2023": {
					"budget_form": 284,
					"paid_form": 242
				},
				"spec_id": "6-05-0611-05"
			},
			{
				"2022": {
					"budget_form": null,
					"paid_form": null
				},
				"2023": {
					"budget_form": 280,
					"paid_form": null
				},
				"spec_id": "6-05-0713-02"
			},
			{
				"2022": {
					"budget_form": 267,
					"paid_form": 226
				},
				"2023": {
					"budget_form": 294,
					"paid_form": 138
				},
				"spec_id": "6-05-0533-04"
			},
			{
				"2022": {
					"budget_form": null,
					"paid_form": null
				},
				"2023": {
					"budget_form": 308,
					"paid_form": 192
				},
				"spec_id": "6-05-0533-12"
			},
			{
				"2022": {
					"budget_form": null,
					"paid_form": null
				},
				"2023": {
					"budget_form": 217,
					"paid_form": null
				},
				"spec_id": "6-05-0533-01"
			},
			{
				"2022": {
					"budget_form": null,
					"paid_form": null
				},
				"2023": {
					"budget_form": 266,
					"paid_form": null
				},
				"spec_id": "6-05-0533-02"
			}
		],
		"cost": 3783.84,
		"additional_info": [
			{
				"title": "Сведения о совместных лабораториях и научных центрах",
				"info": "В 2017 году на факультете открыт первый в Республике Беларусь авторизованный учебный центр компании D-Link. Это дает уникальную возможность студентам пройти сертификационные курсы Международной программы обучения: «Основы передачи и коммутации данных в компьютерных сетях», «Основы беспроводных сетей Wi-Fi» и\n«Технологии коммутации и маршрутизации современных сетей Ethernet». Руководят процессом обучения преподаватели, успешно сдавшие экзамены в компании D-Link на получение статуса «Сертифицированный инструктор».\nВ 2019 году на базе факультета открыта лаборатория инженерно-технического творче ства старших школьников и студентов – STEM-Hub. Здесь юные инженеры под руко водством опытных преподавателей, представителей инженерных компаний и пред принимателей смогут реализовать свои инженерные идеи и создать работающий про тотип, получат возможность дальнейшей работы над удачными проектами.\nОбучаясь на факультете, студенты могут пройти курсы и получить сертификаты между народного образца."
			},
			{
				"title": "Порядок предоставления общежития на факультете",
				"info": "С правилами предоставления общежития можно ознакомиться здесь:\nhttp://abiturient.gsu.by/?page_id=639&lang=ru"
			}
		]
	},
	{
		"id": "2",
		"logo": facIcon3,
		"name_en": "Faculty of Economics",
		"name": "Экономический факультет",
		"admission_plan": [
			{
				"spec_id": "6-05-0311-05",
				"full_time_ed": {
					"budget_form": 4,
					"paid_form": 10
				}
			}
		],
		"contact_info": {
			"address": "г. Гомель, ул. Советская, 104, каб. 3-24",
			"post_address": "ГГУ им. Ф. Скорины, экономический факультет, ул. Советская 104, 246019, г. Гомель, Беларусь",
			"phone": "+375 232 51 01 23",
			"email": " econfac@gsu.by http://economics.gsu.by/"
		},
		"dean": {
			"name": "Костенко Андрей Константинович, кандидат экономических наук, доцент",
			"phone": "+375 232 51 01 23",
			"email": "econfac@gsu.by"
		},
		"passing_grades": [
			{
				"2022": {
					"budget_form": 332,
					"paid_form": 266
				},
				"2023": {
					"budget_form": 321,
					"paid_form": 228
				},
				"spec_id": "6-05-0612-01 (дневная)"
			}
		],
		"cost": 3783.84,
		"additional_info": [
			{
				"title": "Порядок предоставления общежития на факультете",
				"info": "С правилами предоставления общежития можно ознакомиться здесь:\nhttp://abiturient.gsu.by/?page_id=639&lang=ru"
			}
		]
	}
];