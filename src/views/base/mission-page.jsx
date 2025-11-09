import { useState, useEffect } from 'react'

export function MissionPage() {
	const [filter, setFilter] = useState('todas')
	const [missions, setMissions] = useState([])

	useEffect(() => {
		// Exemplo de mock (poderia vir de API)
		setMissions([
			{ id: 1, title: 'Missão 1', status: 'finalizada' },
			{ id: 2, title: 'Missão 2', status: 'bloqueada' },
			{ id: 3, title: 'Missão 3', status: 'ativa' },
		])
	}, [])

	// Função para filtrar as missões
	const filteredMissions =
		filter === 'todas' ? missions : missions.filter((m) => m.status === filter)

	return (
		<div className='bg-[#B5CA8A] h-full w-full flex'>
			{/* Sidebar */}
			<div id='sidebar-container' className='hidden md:block'>
				{/* <Sidebar /> */}
			</div>

			{/* Conteúdo principal */}
			<main className='flex-1 p-6 sm:p-8 flex flex-col'>
				{/* Botões de filtro */}
				<div className='flex gap-4 mb-8 justify-center'>
					<button
						onClick={() => setFilter('todas')}
						className={`px-6 py-2 rounded-full font-medium transition shadow-md ${
							filter === 'todas'
								? 'bg-[#6A9850] text-white'
								: 'bg-white text-[#6A9850] hover:bg-[#6A9850] hover:text-white'
						}`}>
						Todas
					</button>

					<button
						onClick={() => setFilter('finalizada')}
						className={`px-6 py-2 rounded-full font-medium transition shadow-md ${
							filter === 'finalizada'
								? 'bg-[#6A9850] text-white'
								: 'bg-white text-[#6A9850] hover:bg-[#6A9850] hover:text-white'
						}`}>
						Finalizadas
					</button>

					<button
						onClick={() => setFilter('bloqueada')}
						className={`px-6 py-2 rounded-full font-medium transition shadow-md ${
							filter === 'bloqueada'
								? 'bg-[#6A9850] text-white'
								: 'bg-white text-[#6A9850] hover:bg-[#6A9850] hover:text-white'
						}`}>
						Bloqueadas
					</button>
				</div>

				{/* Lista de Missões */}
				<div id='missionsList' className='space-y-4 self-center'>
					{filteredMissions.length > 0 ? (
						filteredMissions.map((mission) => (
							<div
								key={mission.id}
								className='bg-white p-4 w-120 rounded-xl shadow-md flex justify-between items-center transition hover:shadow-lg'>
								<p className='font-medium text-[#4E3B53]'>{mission.title}</p>
								<span
									className={`text-sm font-semibold ${
										mission.status === 'finalizada'
											? 'text-green-600'
											: mission.status === 'bloqueada'
											? 'text-red-600'
											: 'text-gray-600'
									}`}>
									{mission.status}
								</span>
							</div>
						))
					) : (
						<p className='text-center text-[#4E3B53] font-medium'>
							Nenhuma missão encontrada.
						</p>
					)}
				</div>
			</main>
		</div>
	)
}
