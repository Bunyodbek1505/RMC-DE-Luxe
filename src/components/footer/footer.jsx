import { CiFacebook } from 'react-icons/ci'
import { FaInstagram, FaTelegramPlane } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa6'
import logo from '../../images/logo.svg'
import logo2 from '../../images/logo2.png'

const Footer = () => {
	return (
		<section className='max-w-7xl mx-auto py-10 sm:px-4 md:px-4'>
			<div className='flex items-center justify-between'>
				<div>
					<img src={logo} alt='' />
				</div>
				<ul className='flex gap-3'>
					<li>
						<FaInstagram />
					</li>
					<li>
						<FaTelegramPlane />
					</li>
					<li>
						<FaWhatsapp />
					</li>
					<li>
						<CiFacebook />
					</li>
				</ul>
			</div>

			<div className='flex flex-wrap justify-start sm:gap-10 md:gap-20 gap-44 py-8 font-[Jost]'>
				<ul>
					<li>
						<h1 className='font-bold py-2 font-[Jost] text-lg'>Услуги</h1>
					</li>
					<li>Купить</li>
					<li>Арендовать</li>
					<li>Продать</li>
					<li>Оценить</li>
				</ul>
				<ul>
					<li>
						<h1 className='font-bold py-2 font-[Jost] text-lg'>Недвижимость</h1>
					</li>
					<li>Квартиры</li>
					<li>Новостройки</li>
					<li>Дома и участки</li>
					<li>Коммерческая</li>
				</ul>
				<ul>
					<li>
						<h1 className='font-bold py-2 font-[Jost] text-lg'>Компания</h1>
					</li>
					<li>О нас</li>
					<li>Блог</li>
					<li>Контакты</li>
					<li>Связаться</li>
				</ul>
			</div>
			<div className='border border-[#dcdbdb]'></div>
			<div className='flex justify-between items-center'>
				<span className='text-[#B3B3B3] text-sm'>
					2024 © RMC De Luxe real estate LLC. Все права защищены
				</span>
				<img className='w-20' src={logo2} alt='' />
			</div>
		</section>
	)
}

export default Footer
