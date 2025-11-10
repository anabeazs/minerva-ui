import { useState } from 'react'
import * as luc from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import clsx from 'clsx'
import { useHandleLogout } from '../../logic/service/actions'

export function Sidebar() {
	const [isHidden, setIsHidden] = useState(false)

	const toggleSidebar = () => setIsHidden((prev) => !prev)
	const navigate = useNavigate()

	return (
		<motion.aside
			animate={{ width: isHidden ? 240 : 80 }}
			transition={{ duration: 0.15, ease: 'easeInOut' }}
			className=' h-full bg-white shadow-xl flex flex-col pl-5 justify-between overflow-hidden transition-[width,opacity] duration-500 ease-in-out z-2 py-4 px-3'>
			<div
				className={`transition-opacity duration-300 ${
					isHidden || window.innerWidth >= 1024 ? 'opacity-100' : 'opacity-0'
				}`}>
				<div
					className={clsx(
						'mb-2 transition-all',
						isHidden && ' flex items-center justify-between '
					)}>
					<Link to='/dashboard-page'>
						<img
							src='/public/images/logo.png'
							alt='Logo Minerva'
							className={clsx(isHidden ? 'w-7 h-7' : 'h-0 w-0 hidden')}
						/>
					</Link>
					<button onClick={toggleSidebar} className='p-2'>
						<luc.PanelRight className='text-my-purple' />
					</button>
				</div>

				{/* Menu */}
				<nav className='flex flex-col space-y-3'>
					<Link to='/dashboard-page'>
						<BarButton
							text='home'
							icon={<luc.LayoutDashboard size={22} className='text-[#9A5CAD]' />}
							hb={isHidden}
						/>
					</Link>

					<Link to='/mission-page'>
						<BarButton
							text='missões'
							icon={<luc.BookOpen size={22} className='text-[#9A5CAD]' />}
							hb={isHidden}
						/>
					</Link>

					<Link to='/profile-page'>
						<BarButton
							text='perfil'
							icon={<luc.User size={22} className='text-[#9A5CAD]' />}
							hb={isHidden}
						/>
					</Link>
				</nav>
			</div>

			<BarButton
				text='sair'
				icon={<luc.LogOut size={22} />}
				hb={isHidden}
				onClick={() => {
					useHandleLogout() && navigate('/login-page')
				}}
			/>
		</motion.aside>
	)
}

function BarButton({ text, icon, hb, onClick }) {
	return (
		<button
			onClick={onClick}
			className={clsx(
				'flex items-center gap-2 rounded h-10 text-stone-400 text-sm transition-all cursor-pointer p-2',
				'hover:bg-black/10 hover:text-stone-700',
				hb ? 'w-full' : 'w-max self-center'
			)}>
			<span className='flex shrink-0'>{icon}</span>
			<AnimatePresence>
				{hb && (
					<motion.span
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className='whitespace-nowrap font-medium text-base'>
						{text}
					</motion.span>
				)}
			</AnimatePresence>
		</button>
	)
}
