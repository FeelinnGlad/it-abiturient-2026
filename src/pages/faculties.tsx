import PageLayout from "@/layouts/page";
import ContentBlock from "@/ui/contentBlock";
import bg from "@/assets/images/faculties.png";
import SmoothImage from "@/ui/smoothImage";
import classNames from "classnames";
import s from "@/styles/faculties.module.scss";
import ExternalLink from "@/ui/externalLink";
import {FacultiesData} from "@/assets/data/faculties";
import {SpecialtiesData} from "@/assets/data/specialties";

export default function FacultiesPage() {
	return (
		<PageLayout title={"Факультеты"}>
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
					<h2>ФАКУЛЬТЕТЫ</h2>
				</div>
			</ContentBlock>

			<div style={{marginBottom: 140}}>
				{FacultiesData.map(faculty => {
					const specialities = SpecialtiesData.filter(spec => spec.faculty_id === faculty.id);

					return (
						<ContentBlock style={{paddingTop: 100}} key={faculty.id} id={faculty.id}>
							<div className={classNames("secondaryContainer", s.facultyTitle)}>
								<SmoothImage className={s.facultyTitleImage} src={faculty.logo} alt={""}/>
								<h2>{faculty.name}</h2>
							</div>

							<div className={s.facultyInfo}>
								<h3>Контактная информация</h3>
								<p>Адрес: {faculty.contact_info.address}</p>
								<p>Почтовый адрес: {faculty.contact_info.post_address}</p>
								<p>Email: {faculty.contact_info.email}</p>
								<p>Телефон: {faculty.contact_info.phone}</p>

								<h3>Декан факультета</h3>
								<p>{faculty.dean.name}</p>
								<p>Email: {faculty.dean.email}</p>
								<p>Телефон: {faculty.dean.phone}</p>

								<h3>Факультет готовит специалистов по следующим специальностям</h3>
								{specialities.map((spec) => (
									<span key={spec.id}>
										<ExternalLink href={`/${spec.id}`}>{spec.id} {spec.name}</ExternalLink><br/>
									</span>
								))}
							</div>
						</ContentBlock>
					);
				})}
			</div>
		</PageLayout>
	);
}