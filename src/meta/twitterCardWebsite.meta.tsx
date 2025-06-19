import Head from "next/head";
import {validateUrl} from "@/utils/helpers";

interface Props {
	title: string
	url: string
	image: string
	description: string
}

export default function TwitterCardWebsiteMeta(props: Props) {
	return (
		<Head>
			<meta name="twitter:card" content="summary_large_image"/>
			<meta name="twitter:title" content={props.title}/>
			<meta name="twitter:description" content={props.description}/>
			<meta name="twitter:image" content={validateUrl(props.image)}/>
			<meta name="twitter:image:alt" content={props.title}/>
		</Head>
	);
}