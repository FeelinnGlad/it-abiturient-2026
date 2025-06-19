import PageLayout from "@/layouts/page";
import ContentBlock from "@/ui/contentBlock";
import bg from "@/assets/images/faculties.png";
import s from "@/styles/faculties.module.scss";
import {ContactsData, HotlineContactsData} from "@/assets/data/contacts";
import classNames from "classnames";
import LogoIcon from "@/assets/icons/logo.icon";

export default function ContactsPage() {
	return (
		<PageLayout title={"Контакты"}>
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
					<h2>КОНТАКТЫ</h2>
				</div>
			</ContentBlock>

			<div style={{marginTop: 100}}>
				<ContentBlock>
					<div className={classNames("secondaryContainer", s.facultyTitle)} style={{
						padding: "20px 20px 20px 70px",
						alignItems: "center",
						gap: 25
					}}>
						<LogoIcon color={"rgba(142,142,142,0.35)"} className={s.projectLogo}/>
						<div style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							gap: 4
						}}>
							<h2>Контактная информация</h2>
						</div>
					</div>

					{ContactsData.map(contact => (
						<div key={contact.position} className={s.facultyInfo}>
							<h3>{contact.position}</h3>
							<p>{contact.name}</p>
							<p>Аудитория: {contact.cabinet}</p>
							<p>Телефон: {contact.number}</p>
						</div>
					))}
				</ContentBlock>

			</div>

			<div style={{marginBottom: 140, marginTop: 100}}>
				<ContentBlock>
					<div className={classNames("secondaryContainer", s.facultyTitle)} style={{
						padding: "20px 20px 20px 70px",
						alignItems: "center",
						gap: 25
					}}>
						<LogoIcon color={"rgba(142,142,142,0.35)"} className={s.projectLogo}/>
						<div style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							gap: 4
						}}>
							<h2>Горячая линия</h2>
						</div>
					</div>

					{HotlineContactsData.map(contact => (
						<div key={contact.name} className={s.facultyInfo}>
							<h3>{contact.name}</h3>
							<p>Телефон: {contact.number}</p>
						</div>
					))}
				</ContentBlock>

			</div>
		</PageLayout>
	);
}