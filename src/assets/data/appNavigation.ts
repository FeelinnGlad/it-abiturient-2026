export interface AppNavigationAnchor {
	path: string
	name: string
}

const AppNavigation: Array<AppNavigationAnchor> = [
	{
		name: "Главная",
		path: "/"
	},
	{
		name: "Об университете",
		path: "/university"
	},
	{
		name: "Факультеты",
		path: "/faculties"
	},
	{
		name: "ИТ-направления",
		path: "/careers"
	},
	{
		name: "Пройти тест",
		path: "/test"
	},
	{
		name: "Контакты",
		path: "/contacts"
	}
];

export default AppNavigation;