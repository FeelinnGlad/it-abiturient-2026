import type {GetServerSideProps, GetServerSidePropsResult} from "next";
import type {Nullable} from "@/utils/helpers";
import PageLayout from "@/layouts/page";
import {SpecialtiesData, Specialty} from "@/assets/data/specialties";
import bg from "@/assets/images/faculties.png";
import ContentBlock from "@/ui/contentBlock";
import s from "@/styles/faculties.module.scss";
import {FacultiesData} from "@/assets/data/faculties";
import SmoothImage from "@/ui/smoothImage";

interface Props {
	specialityId: string
	key: string
}

export default function SpecialityPage({specialityId}: Props) {
	const speciality: Specialty = SpecialtiesData.find(spec => spec.id === specialityId)!;

	const faculty = FacultiesData.find(fac => fac.id === speciality.faculty_id) || null;

	if(!faculty) throw new Error("Faculty not found!");

	return (
		<PageLayout title={speciality.name}>
			<ContentBlock>
				<div style={{
					height: 200,
					gap: 20,
					padding: "0 50px",
					display: "flex",
					alignItems: "center",
					backgroundImage: `url(${bg.src})`,
					backgroundPosition: "0 0",
					backgroundSize: "100%",
					backgroundRepeat: "no-repeat"
				}}>
					<SmoothImage src={faculty.logo} alt={""} height={70}/>
					<div>
						<h2 style={{marginBottom: 5, textTransform: "uppercase"}}>{speciality.name}</h2>
						<p>{faculty.name}</p>
					</div>
				</div>
			</ContentBlock>

			<ContentBlock style={{marginTop: 60, marginBottom: 140}}>
				<div className={s.facultyInfo}>
					<h3>Код специальности</h3>
					<p>{speciality.id}</p>
					<h3>Квалификация</h3>
					<p>{speciality.qualification}</p>
					<h3>Форма обучения</h3>
					<p>{speciality.education_form}</p>
					<h3>Специфика</h3>
					<p>{speciality.specifics}</p>
					<h3>Чему вы научитесь</h3>
					<p>{speciality.skills}</p>
					<h3>Места распределения выпускников</h3>
					<p>{speciality.graduates_placement}</p>
				</div>
			</ContentBlock>

		</PageLayout>
	);
}

export const getServerSideProps: GetServerSideProps<Props> = async (context): Promise<GetServerSidePropsResult<Props>> => {
	const speciality: Nullable<Specialty> = SpecialtiesData.find(spec => spec.id === context.query.specialityId) || null;

	if(!speciality) return {
		notFound: true
	};

	return {
		props: {
			specialityId: speciality.id,
			key: speciality.id
		}
	};
};