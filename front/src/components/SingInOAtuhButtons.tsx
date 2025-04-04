import {  useSignIn } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button"

const SingInOAtuhButtons = () => {
    const { signIn,isLoaded } = useSignIn();  

    if(!isLoaded) return null

/*************  ✨ Codeium Command ⭐  *************/
/**
 * Initiates the sign-in process using Google OAuth strategy.
 * Redirects the user to Google's authentication page and
 * upon successful authentication, navigates to the specified
 * callback URLs for further processing.
 */

/******  3be9e739-a93a-45d5-9b11-b5674e7ebc91  *******/
    const singInWithGoogle = () => {
        signIn.authenticateWithRedirect({
            strategy: "oauth_google",
            redirectUrl: "/sso-callback",
            redirectUrlComplete: "/auth-callback",
        })
    }

    return <Button onClick={singInWithGoogle} variant={'secondary'} className="w-full cursor-pointer text-white  border-zinc-200 h-11">
            Continue with Google
        </Button>
    }

export default SingInOAtuhButtons
