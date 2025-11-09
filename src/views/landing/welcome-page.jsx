import { Link } from 'react-router-dom'

export function WelcomePage() {
	return (
		<>
			<div
				className='min-h-screen flex items-center justify-center bg-[#F8F8F8] 
        bg-[radial-gradient(circle_at_50%_500%,rgba(127,119,135,0.8)_0%,#F8F8F8_80%)]'>
				<div className='absolute top-6 left-8 z-20'>
					<a href='/'>
						<img
							src='/images/logo.png'
							alt='Logo Minerva'
							className='w-10 h-10'
						/>
					</a>
				</div>

				<div
					className='max-w-6xl w-full flex flex-col md:flex-row items-center justify-between
          px-6 md:px-16 py-10 pt-20 md:pt-10'>
					<div className='flex flex-col items-start max-w-lg space-y-6'>
						<div className='max-w-sm'>
							<h1 className='text-4xl font-extrabold text-[#9A5CAD]'>
								Bem-vindo(a) ao <br />
								<span className='text-[#81A86B]'>Minerva!👋</span>
							</h1>
							<p className='text-lg mt-3 text-[#9A5CAD] font-semibold'>
								Aprenda lógica de um jeito simples, rápido e divertido.
							</p>
							<p className='text-lg mt-2 text-[#9A5CAD]'>
								Uma plataforma feita pra treinar sua lógica com desafios
								práticos e dinâmicos.
							</p>
						</div>

						{/* Botão */}
						<Link to='/login-page'>
							<button
								className='mt-6 px-6 py-3 bg-[#81A86B] text-white font-semibold rounded-xl shadow-md hover:bg-[#B5CA8A] transition-all flex items-center gap-2 cursor-pointer'>
								Bora começar?
							</button>
						</Link>
					</div>

					<div className='mt-10 md:mt-0 grid grid-cols-[1fr_2fr] grid-rows-2 gap-4 w-full md:w-1/2'>
						<div className='row-span-1'>
							<img
								src='/images/mulher-trabalhadora-focada-em-oculos-da-moda-concentrando-se-em-escrever-uma-redacao-sentada-em-um-cafe-aconchegante-perto-laptop-trabalhando-e-fazendo-anotacoes-com-cuidado 1.png'
								alt=''
							/>
						</div>
						<div className='row-span-1 h-56 bg-[#9A5CAD] rounded-3xl'></div>

						<div className='h-40 bg-[#9A5CAD] rounded-3xl'></div>
						<div className='h-40'>
							<img
								src='/images/jovens-colegas-estudando-de-notebook-e-laptop-durante-sessao-de-estudo 1.png'
								alt=''
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
