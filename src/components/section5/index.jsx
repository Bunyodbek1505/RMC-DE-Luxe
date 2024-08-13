import { FaChevronLeft, FaChevronRight, FaHeart } from 'react-icons/fa'
import './section5.css'

import img2 from '../../images/img10.png'
import img3 from '../../images/img11.png'
import img4 from '../../images/img12.png'
import img1 from '../../images/img9.png'

const Section5 = () => {
	const gallary = [
		{
			id: 1,
			name: 'Safa One',
			price: '$1 900 000',
			imageUrl: img1,
		},
		{
			id: 2,
			name: 'Safa Two',
			price: '$399 000',
			imageUrl: img2,
		},
		{
			id: 3,
			name: 'Peninsula Two',
			price: '$245 000',
			imageUrl: img3,
		},
		{
			id: 4,
			name: 'Marina Vista',
			price: '$612 000',
			imageUrl: img4,
		},
	]

	return (
		<div className='max-w-7xl mx-auto py-10 px-4'>
			<div className='flex items-center justify-between'>
				<h2 className='text-3xl font-bold mb-6'>Новостройки</h2>
				<div className=' flex space-x-2'>
					<button className='w-10 h-10 flex justify-center items-center border-2 text-white rounded-full shadow-lg'>
						<FaChevronLeft color='black' />
					</button>
					<button className='w-10 h-10 flex justify-center items-center border-2 text-white rounded-full shadow-lg'>
						<FaChevronRight color='black' />
					</button>
				</div>
			</div>
			<div className='flex space-x-4 overflow-x-auto scrollbar-hide'>
				{gallary.map(value => (
					<div key={value.id} className='relative min-w-[250px]'>
						<img
							src={value.imageUrl}
							alt={value.name}
							className='w-full h-full object-cover rounded-lg'
						/>
						<div className='absolute bottom-4 left-4 text-white'>
							<h3 className='font-bold'>{value.name}</h3>
							<p>{value.price}</p>
						</div>
						<FaHeart className='absolute top-4 right-4 text-white' />
					</div>
				))}
			</div>

			<div className='flex justify-center mt-6'>
				<button className='px-6 py-2 bg-[#D9A387] text-white rounded-md'>
					Смотреть все
				</button>
			</div>
		</div>
	)
}

export default Section5
