import './App.css'
import {
	Carousell,
	Footer,
	Header,
	Section1,
	Section2,
	Section3,
	Section4,
	Section5,
	Section6,
	Section7,
	Section8,
} from './components'

function App() {
	return (
		<>
			<Header />
			<Carousell />
			{/* О компани */}
			<Section1 />
			{/* Инвестиции в недвижимость в Дубае */}
			<Section2 />
			{/* Что входит в услугу управления недвижимостью */}
			<Section3 />
			{/* Почему выбирают нас */}
			<Section4 />
			{/* Новостройки (NewBuildings ) */}
			<Section5 />
			{/* Рассчитайте ипотеку */}
			<Section6 />
			{/* Form */}
			<Section7 />
			{/* Блог */}
			<Section8 />
			<Footer />
		</>
	)
}

export default App
