import Head from "next/head";
import {isDevelopment} from "@/utils/helpers";

interface Props {
	startPhrases?: Array<string>
	endPhrases?: Array<string>
}

const COMMON_PHRASES: Array<string> = [
	"ИТ-специальности",
	"Обучение программированию",
	"Вузы с IT-направлениями",
	"Высшее образование в IT",
	"Гомельский государственный университет",
	"ГГУ официальный сайт",
	"Поступление в ГГУ",
	"Факультеты ГГУ Гомель",
	"ВУЗы Беларуси IT-специальности",
	"ГГУ им. Ф. Скорины",
	"гомельский университет",
	"платное обучение в Беларуси",
	"заочное обучение",
	"образование",
	"экономика",
	"математика",
	"ВУЗ",
	"учреждение образования",
	"высшее образование",
	"цт",
	"централизованное тестирование",
	"абитуриент",
	"студент",
	"наука",
	"аспирантура"
];

export default function KeywordsMeta({startPhrases = [], endPhrases = []}: Props) {
	const keywords: Array<string> = [...startPhrases, ...COMMON_PHRASES, ...endPhrases];

	return (
		<Head>
			<meta
				name="keywords"
				content={keywords.join(",")}
				// Эта инфа для нас, чтобы мы увидели, что ключевых слов не получилось слишком много.
				// Оптимально: до 10 элементов.
				data-count={isDevelopment() ? keywords.length : undefined}
			/>
		</Head>
	);
}