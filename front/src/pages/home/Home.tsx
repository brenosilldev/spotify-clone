import Topbar from "@/components/Topbar"
import { useMusicStore } from "@/store/useMusicStore"
import { useEffect } from "react"


const Home = () => {

    const {fetchFeaturedSongs,fetchMadeForYouSongs,fetchTrendingSongs} = useMusicStore()

    useEffect(() =>{
        fetchFeaturedSongs()
        fetchMadeForYouSongs()
        fetchTrendingSongs()
    },[fetchFeaturedSongs, fetchMadeForYouSongs, fetchTrendingSongs])


    return (
     	<div className="rounded-md overflow-hidden ">
            <Topbar/>
        </div>
    )
}

export default Home