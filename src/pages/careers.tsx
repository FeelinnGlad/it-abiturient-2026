import PageLayout from "@/layouts/page";
import ContentBlock from "@/ui/contentBlock";
import bg from "@/assets/images/faculties.png";
import classNames from "classnames";
import s from "@/styles/faculties.module.scss";
import {CareersData} from "@/assets/data/careers";
import LogoIcon from "@/assets/icons/logo.icon";

export default function CareersPage() {
	return (
		<PageLayout title={"ИТ-направления"}>
			<ContentBlock>
				<div style={{
					height: 200,
					padding: "0 80px",
					display: "flex",
					alignItems: "center",
					backgroundImage: `url(${bg.src})`,
					backgroundPosition: "0 0",
					backgroundSize: "100%",
					backgroundRepeat: "no-repeat"
				}}>
					<h2>ИТ-НАПРАВЛЕНИЯ</h2>
				</div>
			</ContentBlock>

			<div style={{marginBottom: 140}}>
				{CareersData.map(career => (
					<ContentBlock style={{paddingTop: 100}} key={career.id} id={career.id}>
						<div className={classNames("secondaryContainer", s.facultyTitle)} style={{
							padding: "20px 20px 20px 70px",
							alignItems: "center",
							gap: 25
						}}>
							<LogoIcon color={"rgba(142,142,142,0.35)"} className={s.projectLogo} />
							<div style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-start",
								gap: 4
							}}>
								<h2>{career.name}</h2>
								<p>{career.name_en}</p>
							</div>
						</div>

						<div className={s.facultyInfo}>
							<h3>О направлении</h3>
							<p>{career.description}</p>
						</div>
					</ContentBlock>
				))}
			</div>
		</PageLayout>
	);
}