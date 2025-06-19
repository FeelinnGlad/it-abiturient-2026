/* eslint-disable camelcase */

import "@/styles/root.scss";
import "@/styles/global.scss";
import type {AppProps} from "next/app";
import FontVariable from "@/components/fontVariable";
import {Playfair_Display, Inter} from "next/font/google";
import {Store} from "@/utils/store";
import GlobalInlineStyle from "@/components/globalInlineStyle";
import CanonicalPageMeta from "@/meta/canonicalPage.meta";
import PageProgress from "@/components/pageProgress";
import RobotsMeta from "@/meta/robots.meta";
import YandexVerificationMeta from "@/meta/yandexVerification.meta";
import GoogleVerificationMeta from "@/meta/googleVerification.meta";
import PinterestVerificationMeta from "@/meta/pinterestVerification.meta";
import PageHeader from "@/components/pageHeader";
import PageFooter from "@/components/pageFooter";
import {Provider} from "react-redux";
import Config from "@config";
import Head from "next/head";
import DescriptionMeta from "@/meta/description.meta";

const playfair = Playfair_Display({
	weight: ["400", "600", "700"], // 800 можно будет убрать
	style: "normal",
	subsets: ["latin", "cyrillic"],
	display: "swap",
	preload: true
});

const inter = Inter({
	weight: ["400", "600", "700"], // 800 можно будет убрать
	style: "normal",
	subsets: ["latin"],
	display: "swap",
	preload: true
});

// noinspection JSUnusedGlobalSymbols
export default function App({Component, pageProps}: AppProps) {
	return (
		<Provider store={Store}>
			{/* Технические шоколадки */}
			<FontVariable name="playfair" font={playfair}/>
			<FontVariable name="inter" font={inter}/>
			<GlobalInlineStyle/>
			<PageProgress/>
			<Head>
				<title>{Config.PROJECT_NAME}</title>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
			</Head>

			{/* SEO */}
			<DescriptionMeta text={Config.PROJECT_DESCRIPTION}/>
			<CanonicalPageMeta/>
			<RobotsMeta/>
			<YandexVerificationMeta/>
			<GoogleVerificationMeta/>
			<PinterestVerificationMeta/>

			{/* Сама страница */}
			<PageHeader/>
			<Component {...pageProps}/>
			<PageFooter/>
		</Provider>
	);
}