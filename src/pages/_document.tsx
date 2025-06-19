import NextDocument, {Html, Main, Head, NextScript} from "next/document";
import React from "react";

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang="ru" dir="ltr">
				<Head>
					<meta name="format-detection" content="telephone=no, email=no, address=no, date=no"/>
					<meta name="google" content="notranslate"/>
					<link rel="icon" type="image/x-icon" href="/favicon.ico"/>
					<link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
				</Head>
				<body>
					<Main/>
					<NextScript/>
				</body>
			</Html>
		);
	}
}