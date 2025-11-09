import { useEffect, useState } from 'react'
import * as luc from 'lucide-react'


export function ProfilePage() {
	const [userData, setUserData] = useState({
		nome: 'Lorena Rios',
		nivel: 'Iniciante',
		pontos: 1200,
		progresso: 65, // porcentagem da barra de XP
	})

	useEffect(() => {
		// Exemplo de carregamento de dados (mock ou localStorage)
		const storedUser = localStorage.getItem('userProfile')
		if (storedUser) setUserData(JSON.parse(storedUser))
	}, [])

	return (
		<div className='bg-linear-to-b from-[#B5CA8A]/65 to-white w-full h-full flex flex-col items-center justify-center p-6 '>
			{/* Sidebar */}
			<div id='sidebar-container' className='hidden md:block'>
				{/* <Sidebar /> */}
			</div>

			{/* CARD PRINCIPAL */}
			<div className='bg-white shadow-xl rounded-2xl p-6 sm:p-8 w-full max-w-md flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 transition-all duration-300'>
				{/* LADO ESQUERDO */}
				<div className='flex flex-col gap-5 flex-1'>
					<h2 className='text-xl font-bold text-[#4E3B53]'>Seus Pontos</h2>

					{/* Nível */}
					<div className='flex items-center gap-3'>
                  <luc.Swords/>
						<div>
							<p className='text-[#6A9850] font-bold'>Nível</p>
							<p className='text-gray-600 text-sm'>{userData.nivel}</p>
						</div>
					</div>

					{/* Pontos */}
					<div className='flex items-center gap-3'>
                  <luc.Zap/>
						<div>
							<p className='text-[#9A5CAD] font-bold'>Pontos</p>
							<p className='text-gray-600 text-sm'>{userData.pontos}</p>
						</div>
					</div>

					{/* Barra de progresso */}
					<div className='bg-[#9A5CAD] rounded-full h-10 p-3'>
						<div className='w-full bg-[#E6DCC3] rounded-full h-4'>
							<div
								className='bg-[#6A9850] h-4 rounded-full transition-all duration-300'
								style={{ width: `${userData.progresso}%` }}
							/>
						</div>
					</div>
				</div>

				{/* LADO DIREITO */}
				<div className='flex flex-col items-center justify-center text-center'>
					<div className='w-24 h-24 rounded-full border-[5px] border-[#9A5CAD] flex items-center justify-center bg-[#E5D8ED]'>
						<img
							src='/public/images/profile_picture.png'
							alt='Foto de perfil'
							className='rounded-full w-20 h-20 object-cover'
						/>
					</div>
					<p className='text-[#4E3B53] font-medium mt-2'>{userData.nome}</p>
				</div>
			</div>
		</div>
	)
}
