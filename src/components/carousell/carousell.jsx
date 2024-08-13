import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import caruselImg1 from '../../images/carusel1.jpg'
import caruselImg2 from '../../images/carusel2.jpg'

const carousels = [
	{
		image: caruselImg1,
		title: 'Найдите идеальное место для жизни',
		description: 'Откройте двери в новое будущее с нами',
	},
	{
		image: caruselImg2,
		title: 'Инвестиции в недвижимость в Дубае',
		description: 'Узнайте о возможностях и преимуществах инвестиций в Дубае',
	},
]

const Carousel = () => {
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
		<div className='relative max-w-screen h-[700px] bg-gray-800'>
			<img
				src={carousels[currentIndex].image}
				alt='house'
				className='w-full h-full object-cover'
			/>
			<div className='absolute inset-0 bg-black bg-opacity-50'></div>

			<div className='sm:flex-col-reverse'>
				<div className='absolute bottom-10 sm:left-8 sm:w-[300px] left-20 inset-0 flex flex-col justify-end items-start text-white max-w-[500px]'>
					<h1 className='sm:text-3xl  text-5xl font-bold mb-4 leading-tight tracking-wider'>
						{carousels[currentIndex].title}
					</h1>
					<p className='sm:text-[12px] text-sm sm:text-lg mb-8'>
						{carousels[currentIndex].description}
					</p>
					<button className='px-6 py-3 bg-orange-500 text-white font-semibold rounded-md'>
						Подробнее
					</button>
				</div>

				<div className='absolute sm:bottom-72 sm:left-8  bottom-10 right-20 flex space-x-2'>
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
	)
}

export default Carousel
