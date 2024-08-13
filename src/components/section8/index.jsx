import { GoEye } from 'react-icons/go'
import { TiArrowRight } from 'react-icons/ti'
import img1 from '../../images/img14.jpg'
import img2 from '../../images/img15.jpg'
import img3 from '../../images/img16.jpg'

const blog = [
	{
		id: 1,
		date: '31.07.2024',
		count: '890',
		img: img1,
		title: 'Тенденции и прогнозы рынка недвижимости на 2024 год',
	},
	{
		id: 2,
		date: '31.07.2024',
		count: '990',
		img: img2,
		title: 'Лучшие районы для инвестиций в недвижимость',
	},
	{
		id: 3,
		date: '31.07.2024',
		count: '1090',
		img: img3,
		title: 'Топ-10 новых жилых комплексов',
	},
]

const Section8 = () => {
	return (
		<div className='max-w-7xl mx-auto py-10 sm:px-4 md:px-4'>
			<h1 className='text-3xl font-bold mb-8'>Блог</h1>
			<div className='grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8'>
				{blog.map(value => (
					<div key={value.id} className='relative group'>
						<div className='relative h-[300px]'>
							<img
								className='w-full h-full object-cover rounded-lg'
								src={value.img}
								alt={value.title}
							/>
							<div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10'></div>
							<div className='absolute bottom-0 left-0 w-full bg-white bg-opacity-75 p-4'>
								<div className='flex justify-between text-sm text-[#E1AF93]'>
									<div className='text-xs text-gray-500'>{value.date}</div>
									<div className='flex items-center gap-2'>
										<GoEye />
										{value.count}
									</div>
								</div>
							</div>
						</div>
						<div className='pt-2'>
							<p className='text-[#333] font-semibold py-1'>{value.title}</p>
							<span className='flex items-center font-semibold text-sm text-[#E1AF93] mt-2'>
								Подробнее <TiArrowRight fontSize='28px' />
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Section8
