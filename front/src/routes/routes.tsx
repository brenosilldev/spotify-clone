import { Routes,Route } from "react-router-dom"
import AuthCallback from "@/pages/auth-callback"
import Home from "@/pages/home"
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react"
import MainLayout from "@/layout/MainLayout"

export const CompoenentRoutes = () => {
	return (
		<div>
			<Routes >
				<Route path="/sso-callback" element={<AuthenticateWithRedirectCallback signUpFallbackRedirectUrl={"/auth-callback"}  />}/>
				<Route path="/auth-callback" element={<AuthCallback />}/>
				<Route path="/register" element={<h1>Register</h1>}/>

				<Route element={<MainLayout/>}>
					<Route path="/" element={<Home/>}/>

				</Route>
			</Routes>
		</div>
	)
}
