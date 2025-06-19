import Head from "next/head";
import Config from "@config";

export default function GoogleVerificationMeta() {
	return (
		<Head>
			<meta name="google-site-verification" content={Config.VERIFICATION.GOOGLE}/>
		</Head>
	);
}