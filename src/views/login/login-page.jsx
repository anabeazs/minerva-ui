import { useState } from 'react'
import { Link } from 'react-router-dom'

export function LoginPage() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleLogin = (e) => {
		e.preventDefault()
		console.log('Email:', email)
		console.log('Senha:', password)
		// Aqui você pode chamar sua API de autenticação
	}

	return (
		<div
			className='min-h-screen flex items-center justify-center relative'
			style={{
				backgroundImage:
					'linear-gradient(to bottom, #9a5cad, #824e92, #6b4078, #54335f, #3f2647)',
			}}>
			{/* Logo no topo esquerdo */}
			<div className='absolute top-6 left-8 z-20'>
				<a href='/'>
					<img
						src='/images/logoGreen.png'
						alt='Logo Minerva'
						className='w-10 h-10'
					/>
				</a>
			</div>

			{/* Container principal */}
			<div
				className='border border-[#F8F8F8] rounded-3xl
        flex flex-col md:flex-row items-center justify-center gap-10 
        p-0 md:p-8 w-[90%] max-w-5xl'>
				{/* Ilustração */}
				<div className='flex-1 flex items-center justify-center'>
					<img
						src='/images/welcome.png'
						alt='Ilustração'
						className='w-64 md:w-full p-4'
					/>
				</div>

				{/* Card de login */}
				<div className='flex-1 bg-white rounded-3xl shadow-xl px-6 py-10 flex flex-col gap-6 max-w-md w-full'>
					{/* Logo no card */}
					<div className='flex justify-center'>
						<img src='/images/Minerva_logo.png' alt='Logo Minerva' />
					</div>

					{/* Título */}
					<div className='text-center'>
						<h1 className='text-2xl font-bold text-[#9A5CAD]'>Faça login</h1>
						<p className='text-[#81A86B] text-xl font-medium'>
							Vamos aprender juntos!
						</p>
					</div>

					{/* Formulário */}
					<form className='flex flex-col gap-4' onSubmit={handleLogin}>
						<div>
							<input
								id='email'
								type='email'
								placeholder='Email'
								className='w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9A5CAD] shadow-md'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</div>

						<div>
							<input
								id='password'
								type='password'
								placeholder='Senha'
								className='w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9A5CAD] shadow-md'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
							<a
								href='#'
								className='text-sm text-[#9A5CAD] hover:text-[#C8A9E0] float-right mt-1'>
								Esqueceu sua senha?
							</a>
						</div>

						{/* Botão */}
						<button
							type='submit'
							className='mt-4 bg-[#81A86B] text-white font-semibold py-3 shadow-md rounded-xl hover:bg-[#B5CA8A] transition text-center'>
							Entrar
						</button>
					</form>

					{/* Link de cadastro */}
					<p className='text-center text-sm text-[#9A5CAD]'>
						Não tem conta?{' '}
						<Link to='/register-page'>
							<span className='text-[#9A5CAD] font-bold hover:underline'>
								Cadastre-se
							</span>
						</Link>
					</p>
				</div>
			</div>
		</div>
	)
}
