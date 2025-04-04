import { LayoutDashboardIcon } from "lucide-react";
import { Link } from "react-router-dom";
import {SignedOut,SignedIn,SignOutButton } from "@clerk/clerk-react";
import SingInOAtuhButtons from "./SingInOAtuhButtons";

const Topbar = () => {
    const isAdmin = false;
  return (
    <div>
        <div className="flex justify-between items-center p-4 sticky top-0 bg-zinc-900/75 backdrop-blur-md z-10">
            <div className="flex gap-2 itens-center">
                Spotify

            </div>
            <div className="flex gap-4 itens-center">
                {isAdmin && (
                    <Link to='/admin'>
                        <LayoutDashboardIcon className="size-4 mr-2"/>
                        Amdin Dashboard
                    </Link>
                )}

                <SignedIn>
                    <SignOutButton />
                </SignedIn>
                <SignedOut>
                    <SingInOAtuhButtons />
                </SignedOut>

            </div>
        </div>
      
    </div>
  )
}

export default Topbar
