import { LayoutDashboardIcon } from "lucide-react";
import { Link } from "react-router-dom";
import {SignedOut, UserButton } from "@clerk/clerk-react";
import SingInOAtuhButtons from "./SingInOAtuhButtons";
import { useUser } from "@/store/useUser";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

const Topbar = () => {

    const isAdmin = useUser()


    return (

        <div className="flex justify-between items-center px-4 py-4  sticky top-0 bg-zinc-900/75 backdrop-blur-md z-10">
            <div className="flex gap-2 items-center">
                <img src="/spotify.png" alt="Spotify" className="w-8 h-8" />
                Spotify

            </div>
            <div className="flex gap-4 items-center">
                
                {isAdmin && (
                    <Link to='/admin'
                        className={cn(
                            buttonVariants({
                                variant: "outline",})
                        )}                    >
                        

                        <LayoutDashboardIcon className="size-4 mr-2"/>
                        <span>Admin Dashboard</span>
                    
                    </Link>
                )}

                {/* <SignedIn>
                    <SignOutButton />
                </SignedIn> */}

                <SignedOut >
                    <SingInOAtuhButtons />
                </SignedOut>

                <UserButton />

            </div>
        </div>
   
  )
}

export default Topbar
