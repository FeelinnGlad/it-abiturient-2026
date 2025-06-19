import type {GetServerSidePropsContext} from "next";
import {validateUrl, xml} from "@/utils/helpers";
import AppNavigation from "@/assets/data/appNavigation";
import {SpecialtiesData} from "@/assets/data/specialties";

export default function SitemapXml() {}

interface SiteMapEntry {
	url: string
	priority: number
	lastModified?: string
}

function getSiteMapEntries(): Array<SiteMapEntry> {
	const entries: Array<SiteMapEntry> = [];

	for(const navItem of AppNavigation) {
		entries.push({
			url: navItem.path,
			priority: navItem.path === "/" ? 1 : 0.7
		});
	}

	for(const speciality of SpecialtiesData) {
		entries.push({
			url: speciality.id,
			priority: 0.7
		});
	}

	return entries;
}

function generateSiteMap(): string {
	const entries = getSiteMapEntries();

	// noinspection HttpUrlsUsage
	return xml`
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
			${entries.map(entry => `
				<url>
					<loc>${validateUrl(entry.url)}</loc>
					<lastmod>${entry.lastModified || new Date().toISOString()}</lastmod>
					<priority>${entry.priority}</priority>
				</url>
			`).join("")}
		</urlset>
	`;
}

export async function getServerSideProps({res}: GetServerSidePropsContext) {
	const sitemap = generateSiteMap();

	// res.setHeader("Content-Length", sitemap.length);
	res.setHeader("Content-Type", "application/xml");
	res.write(sitemap);
	res.end();

	return {
		props: {}
	};
}