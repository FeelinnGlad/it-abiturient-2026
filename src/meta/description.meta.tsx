import Head from "next/head";
import {isDevelopment} from "@/utils/helpers";

interface Props {
	text: string
}

export default function DescriptionMeta({text}: Props) {
	return (
		<Head>
			<meta
				name="description"
				content={text}
				// Эта инфа для нас, чтобы мы увидели, что описание не получилось слишком длинным.
				// Оптимально: 120–160 символов (включая пробелы).
				data-lenth={isDevelopment() ? text.length : undefined}
			/>
		</Head>
	);
}