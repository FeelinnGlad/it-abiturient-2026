import Head from "next/head";
import Config from "@config";

export default function YandexVerificationMeta() {
	return (
		<Head>
			<meta name="yandex-verification" content={Config.VERIFICATION.YANDEX}/>
		</Head>
	);
}