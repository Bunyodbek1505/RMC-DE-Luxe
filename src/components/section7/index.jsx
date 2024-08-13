import img from '../../images/img13.jpg'

const Section7 = () => {
	return (
		<div className='max-w-7xl mx-auto py-10 flex items-center h-full sm:px-4 sm:flex-col-reverse'>
			<div className='flex-1 w-1/2 h-full p-8 bg-[#F2F6F8] sm:w-full'>
				<div>
					<h2 className='text-3xl font-bold mb-6'>
						Остались вопросы? Свяжитесь с нами
					</h2>
					<form className='space-y-4 max-w-[500px]'>
						<input
							type='text'
							placeholder='ФИО *'
							className='w-full bg-[#F2F6F8] border-b-2 border-gray-300 px-4 py-2 outline-none'
						/>
						<input
							type='text'
							placeholder='Номер телефона *'
							className='w-full bg-[#F2F6F8] border-b-2 border-gray-300 px-4 py-2 outline-none'
						/>
						<input
							type='email'
							placeholder='E-mail'
							className='w-full bg-[#F2F6F8] border-b-2 border-gray-300 px-4 py-2 outline-none'
						/>
						<textarea
							placeholder='Ваш вопрос'
							className='w-full bg-[#F2F6F8] border-b-2 border-gray-300 px-4 py-2 outline-none'
							rows='3'
						/>
						<button className='px-6 py-2 bg-[#D9A387] text-white rounded-md'>
							Отправить
						</button>
					</form>
				</div>
			</div>
			<div className='h-[450px] w-1/3 sm:w-full sm:h-auto'>
				<img
					src={img}
					alt='Building'
					className='w-full h-full sm:h-auto sm:aspect-[4/3] object-cover'
				/>
			</div>
		</div>
	)
}

export default Section7
