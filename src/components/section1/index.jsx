import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import caruselImg2 from '../../images/carusel2.jpg'
import caruselImg3 from '../../images/carusel3.jpg'

const infoData = [
	{
		label: 'Аренда',
		content: `
      Широкий выбор объектов: Мы предлагаем разнообразные варианты аренды — от квартир и домов до коммерческих помещений, удовлетворяющие любые потребности.
      Надежные арендаторы: Проведение тщательной проверки и отбора арендаторов для обеспечения стабильного дохода и минимизации рисков.
    `,
	},
	{
		label: 'Купля - продажа',
		content: `
      Купля-продажа... .
    `,
	},
	{
		label: 'Управление',
		content: `
      Управление... .
    `,
	},
]

const carousels = [
	{
		image: caruselImg3,
		title: 'Найдите идеальное место для жизни',
		description: 'Откройте двери в новое будущее с нами',
	},
	{
		image: caruselImg2,
		title: 'Инвестиции в недвижимость в Дубае',
		description: 'Узнайте о возможностях и преимуществах инвестиций в Дубае',
	},
]

const Section1 = () => {
	const [activeData, setActiveData] = useState(0)
	const [currentIndex, setCurrentIndex] = useState(0)

	const handlePrev = () => {
		const isFirstSlide = currentIndex === 0
		const newIndex = isFirstSlide ? carousels.length - 1 : currentIndex - 1
		setCurrentIndex(newIndex)
	}

	const handleNext = () => {
		const isLastSlide = currentIndex === carousels.length - 1
		const newIndex = isLastSlide ? 0 : currentIndex + 1
		setCurrentIndex(newIndex)
	}

	return (
		<section className='py-[80px]'>
			<div className='sm:px-4 md:px-4 max-w-7xl mx-auto'>
				<div className='sm:flex-col md:flex-col flex justify-between'>
					<div className='sm:py-5 md:py-5 flex flex-col items-start'>
						<h3 className='md:text-3xl text-2xl font-semibold text-gray-600'>
							О компании
						</h3>
						<h2 className='sm:text-2xl text-3xl font-bold text-[#E1AF93] tracking-wider'>
							RMC DE LUXE
						</h2>
					</div>

					<div className='max-w-4xl'>
						<div className='flex justify-start space-x-8 border-b'>
							{infoData.map((info, index) => (
								<button
									key={index}
									onClick={() => setActiveData(index)}
									className={`sm:text-sm text-lg pb-2 ${
										activeData === index
											? 'text-orange-500 border-orange-500 border-b-2'
											: 'text-gray-500'
									}`}
								>
									{info.label}
								</button>
							))}
						</div>
						<div className='mt-4 text-gray-700 leading-relaxed sm:w-full sm:text-[15px] w-[600px]'>
							<p>{infoData[activeData].content}</p>
						</div>
					</div>
				</div>

				{/* Carousel */}
				<div className='w-full mt-10'>
					<div className='relative w-full h-[500px]'>
						<img
							className='w-full h-full object-cover'
							src={carousels[currentIndex].image}
							alt='img'
						/>
						<div className='absolute top-8 left-8 flex space-x-2'>
							<button
								onClick={handlePrev}
								className='w-10 h-10 flex justify-center items-center border-2 text-white rounded-full shadow-lg'
							>
								<FaChevronLeft />
							</button>
							<button
								onClick={handleNext}
								className='w-10 h-10 flex justify-center items-center border-2 text-white rounded-full shadow-lg'
							>
								<FaChevronRight />
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Section1
