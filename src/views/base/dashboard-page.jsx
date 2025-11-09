import { useEffect, useState } from 'react'

export function DashboardPage() {
	const [userName, setUserName] = useState('Usuário')

	useEffect(() => {
		const storedName = localStorage.getItem('userName')
		if (storedName) setUserName(storedName)
	}, [])

	return (
		<div className='bg-[#F6F7F1] h-full flex w-full'>
			{/* Sidebar */}
			<aside id='sidebar-container' className='hidden md:block'>
				{/* <Sidebar /> */}
			</aside>

			{/* Conteúdo principal */}
			<main
				id='main-content'
				className='flex-1 p-4 sm:p-6 md:p-8 pl-12 md:pl-8 relative transition-all duration-300 ease-in-out'>
				{/* Saudação */}
				<div className='mb-6 max-w-4xl mx-auto'>
					<h1 className='text-xl sm:text-2xl font-bold text-[#4E3B53] mb-1'>
						Dashboard
					</h1>
					<p className='text-sm sm:text-base font-medium mb-6 sm:mb-8 text-[#515050] max-w-[90%] sm:max-w-full mx-auto'>
						Olá,{' '}
						<span className='font-semibold text-[#6A9850]'>{userName}</span>!
						Bora cumprir a próxima missão?
					</p>
				</div>

				{/* Grid dos Cards */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto'>
					{/* Missões */}
					<a href='/mission-page' className='no-underline'>
						<div
							className='bg-[#9A5CAD] text-white rounded-xl p-4 shadow-md flex flex-col justify-end aspect-square sm:aspect-4/3
							transition hover:shadow-lg hover:-translate-y-0.5'>
							<p className='text-base sm:text-lg font-bold text-[#C8A9E0]'>
								Comece suas
							</p>
							<h2 className='text-2xl sm:text-4xl font-bold text-[#C8A9E0]'>
								Missões
							</h2>
						</div>
					</a>

					{/* Pontos */}
					<div className='bg-[#B5CA8A] rounded-xl p-4 shadow-md flex flex-col justify-end aspect-square sm:aspect-4/3'>
						<p className='text-base sm:text-lg font-bold text-[#6A9850]'>
							Veja seus
						</p>
						<h2 className='text-2xl sm:text-4xl font-bold text-[#6A9850]'>
							Pontos
						</h2>
					</div>

					{/* Sobre o Minerva */}
					<div className='bg-[#C8A9E0] rounded-xl p-4 shadow-md flex flex-col justify-end aspect-square sm:aspect-4/3'>
						<p className='text-base sm:text-lg font-bold text-[#9A5CAD]'>
							Sobre o
						</p>
						<h2 className='text-2xl sm:text-4xl font-bold text-[#9A5CAD]'>
							Minerva
						</h2>
					</div>

					{/* Trilha */}
					<div className='bg-[#6A9850] text-white rounded-xl p-4 shadow-md flex flex-col justify-end aspect-square sm:aspect-4/3'>
						<p className='text-base sm:text-lg font-bold text-[#B5CA8A]'>
							Explore sua
						</p>
						<h2 className='text-2xl sm:text-4xl font-bold text-[#B5CA8A]'>
							Trilha
						</h2>
					</div>
				</div>
			</main>
		</div>
	)
}
