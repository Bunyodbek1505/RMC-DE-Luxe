const Section6 = () => {
	return (
		<div className='max-w-7xl mx-auto py-10 sm:px-4 md:px-4'>
			<h2 className='text-3xl font-bold mb-6'>Рассчитайте ипотеку</h2>
			<div className='grid sm:grid-cols-1 grid-cols-2 items-center gap-8'>
				<div className='grid sm:grid-cols-1 grid-cols-2 gap-4 border-r px-4'>
					<div>
						<label className='block mb-2'>Стоимость недвижимости (у.е.)</label>
						<input
							type='text'
							placeholder='Введите стоимость'
							className='border rounded-lg px-4 py-2 w-full'
						/>
					</div>
					<div>
						<label className='block mb-2'>Первоначальный взнос (у.е.)</label>
						<input
							type='text'
							placeholder='Введите размер взноса'
							className='border rounded-lg px-4 py-2 w-full'
						/>
					</div>
					<div>
						<label className='block mb-2'>Срок в годах</label>
						<input
							type='text'
							placeholder='Введите срок'
							className='border rounded-lg px-4 py-2 w-full'
						/>
					</div>
					<div>
						<label className='block mb-2'>Ставка (%)</label>
						<input
							type='text'
							placeholder='Введите размер ставки'
							className='border rounded-lg px-4 py-2 w-full'
						/>
					</div>
				</div>
				<div className='grid sm:grid-cols-1 px-4 grid-cols-2 justify-between'>
					<div className='mb-4'>
						<p className='text-gray-500'>Ежемесячный платеж</p>
						<p className='text-xl text-[#333] font-medium'>4 410 у.е.</p>
					</div>
					<div className='mb-4'>
						<p className='text-gray-500'>Сумма кредита</p>
						<p className='text-xl text-[#333] font-medium'>200 000 у.е.</p>
					</div>
					<div className='mb-4'>
						<p className='text-gray-500'>Процентная ставка</p>
						<p className='text-xl text-[#333] font-medium'>24%</p>
					</div>
					<div className='mb-4'>
						<p className='text-gray-500'>Дата последнего платежа</p>
						<p className='text-xl text-[#333] font-medium'>28 июля 2034 г</p>
					</div>
				</div>
			</div>
			<div className='mt-6'>
				<button className='bg-orange-500 text-white py-2 px-6 rounded-lg'>
					Рассчитать
				</button>
			</div>
		</div>
	)
}

export default Section6
