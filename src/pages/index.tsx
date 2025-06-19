import PageLayout from "@/layouts/page";
import ContentBlock from "@/ui/contentBlock";
import bg from "@/assets/images/bg.png";
import skorina from "@/assets/images/skorina.png";
import facBg1 from "@/assets/images/fac-bg-1.png";
import facBg2 from "@/assets/images/fac-bg-2.png";
import facBg3 from "@/assets/images/fac-bg-3.png";
import facIcon1 from "@/assets/images/fac-icon-1.png";
import facIcon2 from "@/assets/images/fac-icon-2.png";
import facIcon3 from "@/assets/images/fac-icon-3.png";
import SmoothImage from "@/ui/smoothImage";
import s from "@/styles/index.module.scss";
import ExternalLinkIcon from "@/assets/icons/externalLink.icon";
import LogoIcon from "@/assets/icons/logo.icon";
import Link from "next/link";

export default function Index() {
	return (
		<PageLayout title={"Главная"}>
			<style jsx global>{`
				html {
					background-image: url("${bg.src}");
					background-repeat: no-repeat;
					background-size: 100% 20%;
					background-position: 50% 0;
				}
			`}</style>
			<ContentBlock>
				<div style={{marginTop: 100, display: "flex", alignItems: "center", justifyContent: "space-between"}}>
					<SmoothImage
						height={400}
						src={skorina}
						alt={"Skorina"}
					/>
					<div style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flex: 1
					}}>
						<div style={{
							display: "flex",
							flexDirection: "column",
							gap: 50,
							alignItems: "flex-start"
						}}>
							<p style={{color: "var(--color-text-hint-weak)", fontSize: "1.2em"}}>Гомельский
								государственный университет<br/>имени Франциска Скорины</p>
							<h1>ИТ-ОБРАЗОВАНИЕ</h1>
							<Link data-role={"btn"} href={"/test"} style={{width: "fit-content"}}>Узнайте свою ИТ-специальность <ExternalLinkIcon strokeSize={15}/></Link>
						</div>
					</div>
				</div>
			</ContentBlock>

			<ContentBlock style={{marginTop: 140}}>
				<div style={{display: "flex", flexDirection: "column", gap: 50, alignItems: "center", justifyContent: "center"}}>
					<h2 style={{marginBottom: 30}}>Факультеты</h2>
					<div style={{display: "flex", gap: 50, justifyContent: "center"}}>
						<div className={s.facultyCard} style={{
							backgroundImage: `url(${facBg1.src})`
						}}>
							<SmoothImage src={facIcon1} alt={""}/>
							<p>Факультет математики и технологий программирования</p>
							<Link data-role={"btn"} href={"/faculties#0"}>Узнать больше <ExternalLinkIcon strokeSize={15}/></Link>
						</div>

						<div className={s.facultyCard} style={{
							backgroundImage: `url(${facBg2.src})`
						}}>
							<SmoothImage src={facIcon2} alt={""}/>
							<p>Факультет физики и информационных технологий</p>
							<Link data-role={"btn"} href={"/faculties#1"}>Узнать больше <ExternalLinkIcon strokeSize={15}/></Link>
						</div>

						<div className={s.facultyCard} style={{
							backgroundImage: `url(${facBg3.src})`
						}}>
							<SmoothImage src={facIcon3} alt={""}/>
							<p>Экономический факультет</p>
							<Link data-role={"btn"} href={"/faculties#2"}>Узнать больше <ExternalLinkIcon strokeSize={15}/></Link>
						</div>
					</div>
				</div>
			</ContentBlock>

			<ContentBlock style={{marginTop: 140}}>
				<div className={"secondaryContainer"} style={{
					padding: 40,
					borderRadius: 300,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					gap: 20
				}}>
					<h2 style={{fontSize: 30}}>Узнайте о востребованных ИТ-профессиях</h2>
					<svg style={{marginTop: 8}} width="170" viewBox="0 0 317 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M317 12.5L297.037 0.88996L296.964 23.9839L317 12.5ZM-0.00630912 13.5L298.994 14.4432L299.006 10.4432L0.00630912 9.50001L-0.00630912 13.5Z"
							fill="white"/>
					</svg>
				</div>
			</ContentBlock>

			<ContentBlock style={{marginTop: 140, marginBottom: 140}}>
				<div style={{display: "flex", gap: 60, alignItems: "center"}}>
					<p style={{fontSize: 30, marginLeft: 30, fontWeight: 100, color: "var(--color-text-title)", fontFamily: "var(--font-family-title)", transform: "translateY(-25px) scale(4.2)"}}>7</p>
					<p style={{fontSize: 30, fontFamily: "var(--font-family-title)"}}>причин поступить в<br/>гомельский государственный университет им. Ф. Скорины</p>
				</div>

				<div style={{display: "flex", flexDirection: "column", gap: 50, marginTop: 70}}>
					<div className={s.featureCard}>
						<div className={s.featureCardIconContainer}>
							<LogoIcon strokeColor={"#469350"} className={s.featureCardIconContainerIcon}/>
							<p>1</p>
						</div>
						<div className={s.featureCardText}>
							<h2>Образование со знаком качества</h2>
							<p>Гомельский государственный университет – один из ведущих вузов классического типа,
								обеспечивающий высокое качество образования, подтвержденное международными сертификатами
								менеджмента качества. В ГГУ используются новейшие методики преподавания и творческий
								подход к изложению учебных дисциплин. Крупнейший вуз региона ведет подготовку по 36
								аккредитованным специальностям I ступени высшего образования, 56 специализациям и 27
								аккредитованным специальностям II ступени высшего образования, проводит переподготовку
								по 11 специальностям. В ГГУ работает более шестисот высококвалифицированных
								преподавателей. Из них 4 члена-корреспондента НАН Беларуси, 45 доктор наук, 233
								кандидата наук. Известные ученые и опытные преподаватели регулярно повышают свою
								профессиональную квалификацию за рубежом. Все свои знания и умения они стремятся
								передать студентам.</p>
						</div>
					</div>

					<div className={s.featureCard} style={{flexDirection: "row-reverse"}}>
						<div className={s.featureCardIconContainer}>
							<LogoIcon strokeColor={"#3e4b73"} className={s.featureCardIconContainerIcon}/>
							<p>2</p>
						</div>
						<div className={s.featureCardText}>
							<h2>Шанс побывать в разных странах мира</h2>
							<p>Из года в год продолжают развиваться международные контакты вуза в образовательной и
								научной сферах. Ежегодно университет посещают десятки иностранных делегаций. Заключен
								ряд договоров о сотрудничестве с учебными заведениями, научными и образовательными
								центрами Китайской Народной Республики, Казахстана, Российской Федерации, Вьетнама,
								Португалии, Узбекистана. Студенты регулярно посещают зарубежные страны, участвуя в
								международных конференциях, научных симпозиумах и учебных визитах.</p>
						</div>
					</div>

					<div className={s.featureCard}>
						<div className={s.featureCardIconContainer}>
							<LogoIcon strokeColor={"#60313b"} className={s.featureCardIconContainerIcon}/>
							<p>3</p>
						</div>
						<div className={s.featureCardText}>
							<h2>Мультикультурная среда обучения</h2>
							<p>Гомельский госуниверситет является лидером региона по количеству иностранных студентов,
								которые здесь обучаются. Это молодежь из КНР, Турции, Ирака, Сирии, Нигерии, России,
								Туркменистана, Азербайджана. Иностранные студенты организовывают различные
								этнографические праздники, выставки и фестивали блюд национальной кухни. Это создает
								уникальную мультикультурную среду, где царит атмосфера уважения к разным национальностям
								и поддерживается культурный диалог. Университет регулярно посещают зарубежные ученые с
								мировым именем, которые проводят для студентов обучающие курсы, тренинги и мастер-классы
								на иностранных языках.</p>
						</div>
					</div>

					<div className={s.featureCard} style={{flexDirection: "row-reverse"}}>
						<div className={s.featureCardIconContainer}>
							<LogoIcon strokeColor={"#806433"} className={s.featureCardIconContainerIcon}/>
							<p>4</p>
						</div>
						<div className={s.featureCardText}>
							<h2>Перспективы успешного трудоустройства</h2>
							<p>Университет сотрудничает с рядом коммерческих и государственных организаций: EPAM
								Systems, IBA-Gomel, ООО «Эпсэлп», РУП «ПО Белоруснефть», ОАО «Гомельский технопарк» и
								др. Высокий уровень теоретических знаний, наработанные за годы обучения практические
								навыки делают выпускников ГГУ востребованными и конкурентоспособными специалистами. Они
								успешно работают в ведущих белорусских и зарубежных компаниях, занимают руководящие
								должности в государственных структурах, научно-исследовательских учреждениях, банках,
								коммерческих и общественных организациях, открывают собственный бизнес. Многим студентам
								трудоустройство по специальности предлагают еще во время учебы.</p>
						</div>
					</div>

					<div className={s.featureCard}>
						<div className={s.featureCardIconContainer}>
							<LogoIcon strokeColor={"#5e456e"} className={s.featureCardIconContainerIcon}/>
							<p>5</p>
						</div>
						<div className={s.featureCardText}>
							<h2>Востребованные специальности</h2>
							<p>Из года в год руководство университета изучает рынок труда и внедряет в образовательный
								процесс новые, востребованные на сегодняшний день, специальности. В 2020 году в
								университете планируется набор на новые специальности: «Прикладная информатика
								(программное обеспечение компьютерных систем)»; «Русский язык и литература. Иностранный
								язык (английский)»; «Лингвистическое обеспечение межкультурных коммуникаций
								(международный туризм)». В прошлом году был произведен первый набор на
								«Бизнес-администрирование», «Экономическую информатику», «Спортивно-педагогическую
								деятельность (тренерскую работу по легкой атлетике, тренерскую работу по футболу)».</p>
						</div>
					</div>

					<div className={s.featureCard} style={{flexDirection: "row-reverse"}}>
						<div className={s.featureCardIconContainer}>
							<LogoIcon strokeColor={"#447377"} className={s.featureCardIconContainerIcon}/>
							<p>6</p>
						</div>
						<div className={s.featureCardText}>
							<h2>Практическая направленность образования</h2>
							<p>В учебном процессе большой упор делается на развитие практических навыков, необходимых
								для работы по выбранной специальности. Это проявляется не только в широких возможностях
								прохождения профессиональных стажировок, но и в организации самого учебного процесса,
								когда наряду с привычными лекциями занятия проходят в формате решения кейсов, деловых
								игр, дискуссий на проблемные темы. Изложение учебного материала сопровождается
								наглядными примерами при помощи мультимедийной техники и современного учебного
								оборудования.</p>
						</div>
					</div>

					<div className={s.featureCard}>
						<div className={s.featureCardIconContainer}>
							<LogoIcon strokeColor={"#985f2d"} className={s.featureCardIconContainerIcon}/>
							<p>7</p>
						</div>
						<div className={s.featureCardText}>
							<h2>Возможность построения научной карьеры</h2>
							<p>На базе университета ведет свою деятельность два научно-исследовательских института, Институт Конфуция и более 20 лабораторий. Получив базовое образование, студентам открывается дорога в магистратуру, аспирантуру по 46 специальностям и докторантуру по 6 специальностям. Ученые, аспиранты и студенты университета имеют возможность публиковать результаты научных исследований в профессиональных научных изданиях: журналах «Известия ГГУ» и «Проблемы физики, математики и техники». В настоящее время в университете работает 45 студенческих научно-исследовательских лабораторий.</p>
						</div>
					</div>
				</div>

			</ContentBlock>
		</PageLayout>
	);
}