import { useState } from 'react'
import { Link } from 'react-router-dom'

export function RegisterPage() {
	const [email, setEmail] = useState('')
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	const handleSignUp = (e) => {
		e.preventDefault()

		if (password !== confirmPassword) {
			alert('As senhas não coincidem!')
			return
		}

		console.log('Email:', email)
		console.log('Usuário:', username)
		console.log('Senha:', password)

		// Aqui você pode chamar sua API de cadastro
	}

	return (
		<div className='min-h-screen flex items-center justify-center bg-my-green relative'>
			{/* Logo no topo esquerdo */}
			<div className='absolute top-6 left-8 z-20'>
				<a href='/'>
					<img
						src='/images/logo.png'
						alt='Logo Minerva'
						className='w-10 h-10'
					/>
				</a>
			</div>

			{/* Container principal */}
			<div
				className='flex flex-col md:flex-row items-center justify-center gap-10 
        p-6 md:p-8 w-[90%] max-w-6xl bg-transparent border border-white rounded-3xl'>
				{/* Formulário */}
				<main
					className='flex-1 bg-white rounded-3xl shadow-sm px-6 py-10 
          flex flex-col gap-6 max-w-lg w-full z-20'>
					<div>
						<h1 className='text-2xl font-bold text-[#6A9850] mb-6'>
							Criar conta
						</h1>

						<form className='space-y-4' onSubmit={handleSignUp}>
							{/* Email */}
							<div>
								<label
									htmlFor='email'
									className='text-sm font-medium text-[#8C539D]'>
									Email*
								</label>
								<input
									id='email'
									type='email'
									placeholder='Digite seu Email'
									className='w-full mt-1 px-4 py-3 rounded-xl border shadow-md
                  focus:outline-none focus:ring-2 focus:ring-[#B8C98C]'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
							</div>

							{/* Usuário */}
							<div>
								<label
									htmlFor='username'
									className='text-sm font-medium text-[#8C539D]'>
									Usuário*
								</label>
								<input
									id='username'
									type='text'
									placeholder='Usuário'
									className='w-full mt-1 px-4 py-3 rounded-xl border shadow-md
                  focus:outline-none focus:ring-2 focus:ring-[#B8C98C]'
									value={username}
									onChange={(e) => setUsername(e.target.value)}
									required
								/>
							</div>

							{/* Senhas */}
							<div className='flex gap-4'>
								<div className='w-1/2'>
									<label
										htmlFor='password'
										className='text-sm font-medium text-[#8C539D]'>
										Criar Senha
									</label>
									<input
										id='password'
										type='password'
										placeholder='Senha'
										className='w-full mt-1 px-4 py-3 rounded-xl border shadow-md
                    focus:outline-none focus:ring-2 focus:ring-[#B8C98C]'
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										required
									/>
								</div>

								<div className='w-1/2'>
									<label
										htmlFor='confirmPassword'
										className='text-sm font-medium text-[#8C539D]'>
										Repetir Senha
									</label>
									<input
										id='confirmPassword'
										type='password'
										placeholder='Senha'
										className='w-full mt-1 px-4 py-3 rounded-xl border shadow-md
                    focus:outline-none focus:ring-2 focus:ring-[#B8C98C]'
										value={confirmPassword}
										onChange={(e) => setConfirmPassword(e.target.value)}
										required
									/>
								</div>
							</div>

							{/* Botão */}
							<button
								type='submit'
								className='w-full mt-6 bg-[#9053A7] hover:bg-[#7F4793] text-white font-medium py-3 rounded-xl shadow-md transition'>
								Cadastrar
							</button>
						</form>
					</div>

					{/* Link de login */}
					<p className='text-sm text-center text-[#9A5CAD] mt-4'>
						Já tem conta?{' '}
						<Link to='/login-page'>
							<span className='text-[#9A5CAD] font-bold hover:underline'>
								Fazer Login
							</span>
						</Link>
					</p>
				</main>

				{/* Caixa ilustrativa */}
				<div
					className='hidden md:flex p-8 md:p-10 w-full max-w-lg h-128  
          flex-col items-center justify-center rounded-2xl border border-white'>
					<img
						src='/images/CadastroWelcome.png'
						alt='Ilustração'
						className='w-64 md:w-full p-4'
					/>
				</div>
			</div>
		</div>
	)
}
