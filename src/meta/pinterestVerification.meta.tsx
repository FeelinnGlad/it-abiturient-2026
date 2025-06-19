import Head from "next/head";
import Config from "@config";

export default function PinterestVerificationMeta() {
	return (
		<Head>
			<meta name="p:domain_verify" content={Config.VERIFICATION.PINTEREST}/>
		</Head>
	);
}