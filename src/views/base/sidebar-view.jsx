import { useState } from 'react'
import * as luc from 'lucide-react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import clsx from 'clsx'

export function Sidebar() {
	const [isHidden, setIsHidden] = useState(false)

	const toggleSidebar = () => setIsHidden((prev) => !prev)

	return (
		<motion.aside
			animate={{ width: isHidden ? 240 : 80 }}
			transition={{ duration: 0.25, ease: 'circInOut' }}
			className=' h-full bg-white shadow-xl flex flex-col justify-between overflow-hidden transition-[width,opacity] duration-500 ease-in-out z-2 py-4 px-3'>
			<div
				className={`transition-opacity duration-300 ${
					isHidden || window.innerWidth >= 1024 ? 'opacity-100' : 'opacity-0'
				}`}>
				<div className='flex items-center justify-between gap-2 mb-2'>
					<Link to='/dashboard'>
						<img
							src='/public/images/logo.png'
							alt='Logo Minerva'
							className={clsx(isHidden ? 'w-7 h-7' : 'h-0 w-0')}
						/>
					</Link>
					<button onClick={toggleSidebar} className='p-2'>
						<luc.PanelRight className='text-my-purple' />
					</button>
				</div>

				{/* Menu */}
				<nav className='flex flex-col space-y-3'>
					<Link to='/layout/dashboard-page'>
						<BarButton
							text='home'
							icon={<luc.Home size={22} className='text-[#9A5CAD]' />}
							hb={isHidden}
						/>
					</Link>

					<Link to='/layout/mission-page'>
						<BarButton
							text='missões'
							icon={<luc.BookOpen size={22} className='text-[#9A5CAD]' />}
							hb={isHidden}
						/>
					</Link>

					<Link to='/layout/profile-page'>
						<BarButton
							text='perfil'
							icon={<luc.User size={22} className='text-[#9A5CAD]' />}
							hb={isHidden}
						/>
					</Link>
				</nav>
			</div>

			<Link to='/login-page'>
				<BarButton text='sair' icon={<luc.LogOut size={22} />} hb={isHidden} />
			</Link>
		</motion.aside>
	)
}

function BarButton({ text, icon, hb }) {
	return (
		<button
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
