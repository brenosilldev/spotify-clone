import Topbar from "@/components/Topbar"
import { useMusicStore } from "@/store/useMusicStore"
import { useEffect } from "react"
import FeaturedSection from "./componentes/FeaturedSection"
import { ScrollArea } from "@radix-ui/react-scroll-area"
import SectionGrid from "./componentes/SectionGrid"

const Home = () => {

    const {fetchFeaturedSongs,fetchMadeForYouSongs,fetchTrendingSongs,isLoading,madeForYouSongs,tredingSongs} = useMusicStore()

   
    useEffect(() =>{

        fetchFeaturedSongs()
        fetchMadeForYouSongs()
        fetchTrendingSongs()
    },[fetchFeaturedSongs, fetchMadeForYouSongs, fetchTrendingSongs])


    return (
     	<main className="rounded-md overflow-hidden h-full bg-gradient-to-b from-zinc-500">
            <Topbar/>
            <ScrollArea className='h-[calc(100vh-180px)]'>
				<div className='p-4 sm:p-6'>
					<h1 className='text-2xl sm:text-3xl font-bold mb-6'>Good afternoon</h1>
					<FeaturedSection />

					<div className='space-y-8'>
						<SectionGrid title='Made For You' songs={madeForYouSongs} isLoading={isLoading} />
						<SectionGrid title='Trending' songs={tredingSongs} isLoading={isLoading} />
					</div>
				</div>
			</ScrollArea>
        </main>
    )
}

export default Home