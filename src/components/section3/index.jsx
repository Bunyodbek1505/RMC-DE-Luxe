import React from 'react'

const services = [
	[
		'Проверка арендаторов (кредитная история, рекомендации)',
		'Регулярное техническое обслуживание',
	],
	[
		'Подготовка и подписание договоров аренды',
		'Организация и проведение ремонтных работ',
	],
	['Сбор арендной платы', 'Контроль за состоянием недвижимости'],
	['Обработка запросов и жалоб арендаторов', 'Подбор надежных арендаторов'],
	['Контроль соблюдения условий аренды'],
]

const Section3 = () => {
	return (
		<section className='py-16'>
			<div className='sm:px-4 md:px-4 max-w-7xl mx-auto'>
				<div className='py-8'>
					<h2 className='text-3xl font-bold mb-8 font-[Jost] text-[#333333] tracking-wider'>
						Что входит в услугу <br /> управления недвижимостью
					</h2>
					<div className='sm:grid-cols-1 md:grid-cols-1 grid grid-cols-2 gap-0'>
						{services.map((pair, index) => (
							<React.Fragment key={index}>
								{pair.map((service, subIndex) => (
									<div
										key={subIndex}
										className={`flex items-center space-x-4 p-4 ${
											index > 0 ? 'border-t border-gray-300' : ''
										} ${subIndex > 0 ? 'border-l border-gray-300' : ''} ${
											index === services.length - 1
												? 'border-b border-gray-300'
												: ''
										} ${
											subIndex === pair.length - 1 ? ' border-gray-300' : ''
										}`}
									>
										<span className='text-white text-xl'>✔</span>
										<p>{service}</p>
									</div>
								))}
							</React.Fragment>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Section3
