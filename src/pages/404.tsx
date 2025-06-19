import PageLayout from "../layouts/page";
import Link from "next/link";
import ContentBlock from "@/ui/contentBlock";

// noinspection JSUnusedGlobalSymbols
export default function NotFoundPage() {
	return (
		<PageLayout title="Страница не найдена">
			<ContentBlock>
				<div style={{
					display: "flex",
					height: "92vh",
					alignItems: "center",
					justifyContent: "center",
					gap: 40,
					flexDirection: "column"
				}}>
					<h1 style={{
						fontSize: 90
					}}>404</h1>
					<p>Запрашиваемая страница не найдена</p>
					<Link href="/" data-role="btn">
						На главную
					</Link>
				</div>

			</ContentBlock>
		</PageLayout>
	);
}