import api from "@/lib/Axios";
import { useAuth } from "@clerk/clerk-react";
import { Loader } from "lucide-react";
import {  useEffect, useState } from "react";
import {useUser} from "../store/useUser"

const updateApiToken = (token:string | null)=>{
    if(token){
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`
    }else{
        delete api.defaults.headers.common["Authorization"]
    }
}



const AuthProvider = ({children }: { children: React.ReactNode }) => {

    const {getToken} = useAuth();
    const  [loading,setLoading] = useState(true)
    const {checkAdminStatus} = useUser()


    useEffect(() => {
        const initAuth = async()=>{
            try{

                const token = await getToken();

                if(token){

                    await checkAdminStatus()
                }


                updateApiToken(token);


            }catch(erro:any){
                updateApiToken(null);
               console.log(erro) 
            }finally{
                setLoading(false)
            }
        }

        initAuth()
        
    },[checkAdminStatus, getToken])

    if(loading){
         return(
            <div className="h-screen flex justify-center items-center">
                <Loader className="size-24 text-green-500 animate-spin"/>


            </div>
       )
    }

    return (
        <div>
            {children}
        </div>
    )
}

export default AuthProvider
