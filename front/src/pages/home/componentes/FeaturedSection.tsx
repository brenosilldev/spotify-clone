import FeaturedSectionSkeleton from "@/components/skeleton/FeaturedSectionSkeleton"
import  { useMusicStore } from "@/store/useMusicStore"
import { useEffect } from "react"

const FeaturedSection = () => {
    const { isLoading, fetchFeaturedSongs, error,featuredSongs } = useMusicStore()

    useEffect(() => {
        fetchFeaturedSongs()
    },[fetchFeaturedSongs])


    // if(isLoading) return <FeaturedSectionSkeleton />

    // if(error) return <p className="text-red-500 mb-4 text-lg" >{error}</p>


    return (
        <div className="grid grid-cols-12 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {featuredSongs.map((song) =>{
                return(
                    <div key={song._id} className="flex items-center bg-zinc-900 rounded-md  overflow-hidden hover:bg-zinc-700/50 transition-colors group cursor-alias relative">
                       <img src={song.imageUrl} alt={song.title} className="w-16 sm:w20 h-16 sm:h-20 object-cover flex-sherink-0" />
                        <div className="flex-1 p-4">
                            <p className="font-medium  truncate">{song.title}</p>
                            <p className="text-sm text-zinc-400 truncate">{song.artist}</p>

                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default FeaturedSection