import PageLayout from "@/layouts/page";
import ContentBlock from "@/ui/contentBlock";
import bg from "@/assets/images/faculties.png";
import {useState} from "react";
import {QuestionsData} from "@/assets/data/questions";
import s from "@/styles/test.module.scss";
import {CareersData} from "@/assets/data/careers";
import ExternalLink from "@/ui/externalLink";

interface Score {
	[key: string]: number
}

export default function ContactsPage() {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [score, setScore] = useState<Score>({});

	const currentQuestion = QuestionsData[currentQuestionIndex] || null;

	return (
		<PageLayout title={"Тест на ИТ-специальность"}>
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
					<h2>ТЕСТ НА ИТ-СПЕЦИАЛЬНОСТЬ</h2>
				</div>
			</ContentBlock>

			<ContentBlock style={{marginTop: 100, marginBottom: 140}}>
				<div style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center"
				}}>
					{currentQuestion === null ? (
						<div className={s.resultCard}>
							<h3>Результат</h3>
							<p>Вам могут подойти следующие ИТ-направления</p>

							{Object.keys(score)
								.sort((a, b) => score[b] - score[a])
								.map(key => {
									const career = CareersData.find(career => career.id === key)!;
									const localScore = score[key];

									return {
										percentage: localScore * 100 / QuestionsData.length,
										score: localScore,
										career
									};
								})
								.map(item => (
									<div key={item.career.id} style={{
										opacity: Math.min(1, (item.percentage / 100) + 0.3)
									}}>
										<span>{item.percentage.toFixed(0)}%</span> <ExternalLink blank href={`/careers#${item.career.id}`}>{item.career.name}</ExternalLink>
									</div>
								))
							}

							<button onClick={() => {
								setCurrentQuestionIndex(0);
								setScore({});
							}}>Пройти тест заново</button>
						</div>
					) : (
						<div className={s.questionCard}>
							<p>{currentQuestionIndex+1} / {QuestionsData.length}</p>
							<h3>{currentQuestion.text}</h3>
							{currentQuestion.answers.map((answer, index) => (
								<button key={answer.text} onClick={() => {
									setCurrentQuestionIndex(prevState => prevState+1);

									answer.id_points.forEach(idPoint => {
										setScore(prevState => {
											const newIdPoint = idPoint.toString();

											let score = prevState[newIdPoint] || 0;

											score++;

											return {
												...prevState,
												[newIdPoint]: score
											};
										});
									});
								}}>{index+1}. {answer.text}</button>
							))}
						</div>
					)}
				</div>

			</ContentBlock>
		</PageLayout>
	);
}