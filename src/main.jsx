import './tailwind.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { WelcomePage } from './views/landing/welcome-page.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LoginPage } from './views/login/login-page.jsx'
import { RegisterPage } from './views/register/register-page.jsx'
import { DashboardPage } from './views/base/dashboard-page.jsx'
import { Layout } from './views/base/layout.jsx'
import { ProfilePage } from './views/base/profile-page.jsx'
import { MissionPage } from './views/base/mission-page.jsx'

const webRoutes = createBrowserRouter([
	{
		path: '/',
		element: <WelcomePage />,
	},
	{
		path: '/login-page',
		element: <LoginPage />,
	},
	{
		path: '/register-page',
		element: <RegisterPage />,
	},
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: 'dashboard-page',
				element: <DashboardPage />,
			},
			{
				path: 'profile-page',
				element: <ProfilePage />,
			},
			{
				path: 'mission-page',
				element: <MissionPage />,
			},
		],
	},
])

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={webRoutes} />
	</StrictMode>
)
