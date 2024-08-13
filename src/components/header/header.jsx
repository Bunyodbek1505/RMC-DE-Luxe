import { useState } from 'react'
import { CiHeart, CiPhone, CiSearch } from 'react-icons/ci'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import { MdKeyboardArrowDown } from 'react-icons/md'
import logo from '../../images/logo.svg'

const Header = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false)
	const [isOpenMenu, setIsOpenMenu] = useState(false)

	const handleMouseEnter = () => {
		setIsDropdownOpen(true)
	}

	const handleMouseLeave = () => {
		setIsDropdownOpen(false)
	}

	const responseMenu = () => {
		setIsOpenMenu(!isOpenMenu)
	}

	return (
		<header className='fixed top-0 left-0 w-full bg-white shadow-md z-50'>
			<div className='w-full py-3 mx-[auto] flex sm:justify-between md:justify-between sm:px-4 md:px-4 justify-around items-center'>
				<div className='cursor-pointer'>
					<img className='sm:w-40' src={logo} alt='RMC DE LUXE' />
				</div>
				{/* menu  */}
				<ul className='flex gap-5 cursor-pointer sm:hidden md:hidden'>
					<li
						className='flex items-center text-[#333333] gap-2 relative'
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
					>
						Услуги
						<span className='text-[22px]'>
							<MdKeyboardArrowDown />
						</span>
						{isDropdownOpen && (
							<ul className='absolute top-full z-30 left-0 w-52 bg-white shadow-lg rounded-md overflow-hidden transform transition-all duration-300 ease-out'>
								<li className='px-4 py-2 hover:bg-[#FCF7F4]'>Купить</li>
								<li className='px-4 py-2 hover:bg-[#FCF7F4]'>Арендовать</li>
								<li className='px-4 py-2 hover:bg-[#FCF7F4]'>Продать</li>
								<li className='px-4 py-2 hover:bg-[#FCF7F4]'>
									Оценка недвижимости
								</li>
							</ul>
						)}
					</li>
					<li>О нас</li>
					<li>Блог</li>
					<li>Контакты</li>
				</ul>
				{/* menu  */}

				{/* menu icons */}
				<ul className='flex text-center items-center gap-5 sm:gap-2 cursor-pointer'>
					<li className='w-[40px] h-[40px] border-2 rounded-full flex items-center justify-center text-xl hover:bg-[#E1AF93] hover:text-white'>
						<CiSearch />
					</li>
					<li className='w-[40px] h-[40px] border-2 rounded-full flex items-center justify-center text-xl hover:bg-[#E1AF93] hover:text-white'>
						<CiHeart />
					</li>
					<li className='sm:hidden md:hidden w-[40px] h-[40px] bg-black rounded-full flex items-center justify-center text-xl hover:bg-[#E1AF93] hover:text-white'>
						<CiPhone color='white' />
					</li>
					{/* menu burger icon */}
					<li
						className=' hidden w-[40px] h-[40px] bg-black rounded-full sm:flex md:flex items-center justify-center text-xl'
						onClick={responseMenu}
					>
						<GiHamburgerMenu color='white' />
					</li>
					{/* select */}
					<li className='w-[40px] h-[40px] border-2 rounded-[50%] px-7 py-5 flex items-center justify-center sm:hidden md:hidden'>
						<select className='text-black border-none outline-none'>
							<option value='ru'>Ru</option>
							<option value='uz'>Uz</option>
							<option value='en'>En</option>
						</select>
					</li>
				</ul>
				{/* menu icons */}
			</div>

			{/* Mobile Header */}
			{isOpenMenu && (
				<div className='absolute top-0 right-0 z-40 sm:w-[300px] md:w-[400px] bg-white h-screen'>
					<div>
						{/* select */}
						<ul className='flex justify-end p-5 gap-3'>
							<li className='w-[40px] h-[40px] border-2 rounded-[50%] px-7 py-5 flex items-center justify-center'>
								<select className='text-black !border-none !outline-none'>
									<option value='ru'>Ru</option>
									<option value='uz'>Uz</option>
									<option value='en'>En</option>
								</select>
							</li>
							<li
								className='w-[40px] h-[40px] bg-black rounded-full flex items-center justify-center text-xl'
								onClick={responseMenu}
							>
								<IoMdClose color='white' />
							</li>
						</ul>
						<div className='border border-gray-300 w-full !p-0'></div>
						{/* menu  */}
						<ul className='flex-row cursor-pointer py-6 px-4'>
							<li
								className=' text-[#333333] py-2'
								onClick={() => setIsDropdownOpen(!isDropdownOpen)}
							>
								<div className='flex !items-center'>
									Услуги
									<span className='text-[22px]'>
										<MdKeyboardArrowDown />
									</span>
								</div>
								{isDropdownOpen && (
									<ul className='w-full rounded-md overflow-hidden transform transition-all duration-300 ease-out'>
										<li className='px-4 py-2 hover:bg-[#FCF7F4]'>Купить</li>
										<li className='px-4 py-2 hover:bg-[#FCF7F4]'>Арендовать</li>
										<li className='px-4 py-2 hover:bg-[#FCF7F4]'>Продать</li>
										<li className='px-4 py-2 hover:bg-[#FCF7F4]'>
											Оценка недвижимости
										</li>
									</ul>
								)}
							</li>
							<li className=' py-2'>О нас</li>
							<li className=' py-2'>Блог</li>
							<li className=' py-2'>Контакты</li>
						</ul>

						<div className='absolute bottom-5 left-4'>
							<button className='bg-[#E1AF93] text-white py-3 px-4 text-[17px]'>
								Задать вопрос
							</button>
						</div>
						{/* menu  */}
					</div>
				</div>
			)}
			{/* Mobile Header */}
		</header>
	)
}

export default Header
