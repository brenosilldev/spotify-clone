import {
	Card,
	CardContent,

} from "@/components/ui/card"
import api from "@/lib/Axios"
import { useUser } from "@clerk/clerk-react"
import { Loader } from "lucide-react"
import { useEffect, useRef } from "react"
import {  useNavigate } from "react-router-dom"


const AuthCallback = () => {
    const {  user, isLoaded } = useUser()
    const navigate = useNavigate()
    const  syncUserAttemp = useRef(false)
 

    useEffect(()=>{
        const syncUser = async() =>{

            try {
                if(!isLoaded || !user || syncUserAttemp.current) return
                
                await api.post('/auth/callback', {
                    id:user.id,
                    name:user.fullName,
                    email:user.primaryEmailAddress?.emailAddress,
                    imageurl:user.imageUrl,
    
                })

                syncUserAttemp.current = true
                
            } catch (error) {
                console.log(error)

            }finally{
                navigate('/')
            }

            
        }

        syncUser()
    },[navigate,isLoaded,user])


	return (
		<div className='h-screen  w-full bg-black flex justify-center items-center'>
			<Card className="w-[90%] max-w-md bg-zinc-600 border-zinc-900">		
				<CardContent className="flex flex-col gap-4 pt-6 items-center"  >
                    <Loader className="size-20 animate-spin" />
                    <h2>Loggin you in</h2>
                    <h2>Redirecting...</h2>
                </CardContent>
        
	    	</Card>

		</div>
	)
}

export default AuthCallback
