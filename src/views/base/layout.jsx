// O Outlet é o responsável por renderizar os componentes do children no react-router que definimos
import { Outlet } from 'react-router-dom'
import { Sidebar } from './sidebar-view'

export function Layout() {
	return (
		<div className='w-screen h-screen'>
			<div className='flex flex-row w-full h-full'>
				<Sidebar />
				<Outlet />
			</div>
		</div>
	)
}
