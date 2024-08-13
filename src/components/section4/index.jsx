import img1 from '../../images/img5.jpg'
import img2 from '../../images/img6.jpg'
import img3 from '../../images/img7.jpg'
import img4 from '../../images/img8.jpg'

const Section4 = () => {
	return (
		<section className='py-16'>
			<div className='sm:px-4 md:px-4 max-w-7xl mx-auto'>
				<h1 className='font-[Jost] text-[#333333] tracking-wide text-3xl font-bold'>
					Почему выбирают нас
				</h1>
				<div className='grid sm:grid-cols-1 sm:grid-rows-auto md:grid-cols-2 grid-cols-3 gap-6 mt-8'>
					{/* card1 */}
					<div className='border flex flex-col items-center justify-center p-6 h-full'>
						<h3 className='text-lg font-semibold mb-2 font-[Jost] text-[#333333] text-center'>
							Опыт и профессионализм
						</h3>
						<p className='text-sm text-center'>
							Наши специалисты имеют многолетний опыт в различных сферах
							недвижимости, что гарантирует высокое качество услуг
						</p>
					</div>

					{/* card2 */}
					<div className='border'>
						<img
							className='w-full h-full object-cover'
							style={{ aspectRatio: '16/9' }}
							src={img1}
							alt=''
						/>
					</div>

					{/* card3 */}
					<div className='border flex flex-col items-center justify-center p-6 h-full'>
						<h3 className='text-lg font-semibold mb-2 font-[Jost] text-[#333333] text-center'>
							Прозрачность и доверие
						</h3>
						<p className='text-sm text-center'>
							Обеспечение полной прозрачности всех операций и предоставление
							отчетов. Работа основана на принципах честности и доверия, что
							подтверждается отзывами.
						</p>
					</div>

					{/* card4 */}
					<div className='border'>
						<img
							className='w-full h-full object-cover'
							style={{ aspectRatio: '16/9' }}
							src={img2}
							alt=''
						/>
					</div>

					{/* card5 */}
					<div className='border flex flex-col items-center justify-center p-6 h-full'>
						<h3 className='text-lg font-semibold mb-2 font-[Jost] text-[#333333] text-center'>
							Высокий уровень обслуживания
						</h3>
						<p className='text-sm text-center'>
							Мы всегда на связи, чтобы помочь вам в любое время
						</p>
					</div>

					{/* card6 */}
					<div className='border'>
						<img
							className='w-full h-full object-cover'
							style={{ aspectRatio: '16/9' }}
							src={img3}
							alt=''
						/>
					</div>

					{/* card7 */}
					<div className='border flex flex-col items-center justify-center p-6 h-full'>
						<h3 className='text-lg font-semibold mb-2 font-[Jost] text-[#333333] text-center'>
							Профессиональная команда
						</h3>
						<p className='text-sm text-center'>
							Наша команда состоит из специалистов высокого уровня,
							обеспечивающих безупречное обслуживание.
						</p>
					</div>

					{/* card8 */}
					<div className='border'>
						<img
							className='w-full h-full object-cover'
							style={{ aspectRatio: '16/9' }}
							src={img4}
							alt=''
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Section4
