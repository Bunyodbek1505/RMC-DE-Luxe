import img1 from '../../images/carusel2.jpg'
import img2 from '../../images/img4.jpg'

const Section2 = () => {
	return (
		<section className='bg-[#EDF3F5] py-10'>
			<div className='sm:px-4 md:px-4 max-w-7xl mx-auto'>
				<div className='sm:flex-col md:flex-col flex justify-between items-start'>
					{/* Text Section */}
					<div className='max-w-[700px]'>
						<h1 className='sm:text-3xl text-4xl max-w-[500px] font-[Jost] text-[#333333] tracking-wider font-bold mb-4'>
							Инвестиции в недвижимость в Дубае
						</h1>
						<div className='sm:text-sm flex flex-col gap-4 py-5 text-base leading-relaxed'>
							<p>
								Недвижимость в Дубае предоставляет отличные возможности для
								получения стабильного дохода и увеличения капитала.
							</p>
							<p>
								Полный цикл инвестиций: От анализа рынка и подбора объектов до
								управления инвестициями и их реализации.
							</p>
							<p>
								Наши эксперты помогут вам на всех этапах инвестиционного
								процесса, обеспечивая высокое качество обслуживания и
								надежность.
							</p>
							<p>
								Наши услуги включают управление вашей инвестиционной
								недвижимостью, обеспечивая её сохранность и стабильный доход. Мы
								берем на себя все аспекты управления, включая подбор и проверку
								арендаторов, техническое обслуживание, финансовую отчетность и
								юридическую поддержку.
							</p>
						</div>
						<button className='sm:hidden md:hidden bg-[#E1AF93] py-3 px-8 text-white'>
							Подробнее
						</button>
					</div>

					{/* Images Section */}
					<div className='sm:flex sm:justify-center md:flex md:justify-center relative'>
						<div className='sm:w-1/2 sm:h-[300px] md:w-1/2 md:h-[400px] w-[400px] h-[450px]'>
							<img
								className='w-full h-full object-cover'
								src={img1}
								alt='Image'
							/>
						</div>
						<div className='sm:w-1/2 sm:h-[300px] md:w-1/2 md:h-[400px] w-[200px] h-[250px] sm:relative md:relative absolute sm:left-0 sm:bottom-0 md:left-0 md:bottom-0 left-[-70px] bottom-[-50px]'>
							<img
								className='w-full h-full object-cover'
								src={img2}
								alt='Image'
							/>
						</div>
					</div>
					<button className='sm:block md:block hidden mt-8 bg-[#E1AF93] py-3 px-8 text-white'>
						Подробнее
					</button>
				</div>
			</div>
		</section>
	)
}

export default Section2
