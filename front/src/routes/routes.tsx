import { Routes,Route } from "react-router-dom"
import AuthCallback from "@/pages/auth-callback"
import Home from "@/pages/home/Home"
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react"
import MainLayout from "@/layout/MainLayout"
import ChatPage from "@/pages/chat/ChatPage"
import Albums from "@/pages/albums"

export const CompoenentRoutes = () => {
	return (
		<div>
			<Routes >
				<Route path="/sso-callback" element={<AuthenticateWithRedirectCallback signUpFallbackRedirectUrl={"/auth-callback"}  />}/>
				<Route path="/auth-callback" element={<AuthCallback />}/>
				<Route path="/register" element={<h1>Register</h1>}/>

				<Route element={<MainLayout/>}>
					<Route path="/" element={<Home/>}/>
					<Route path="/chat" element={<ChatPage/>}/>
					<Route path="/albums/:albumId" element={<Albums/>}/>
				</Route>
			</Routes>
		</div>
	)
}
