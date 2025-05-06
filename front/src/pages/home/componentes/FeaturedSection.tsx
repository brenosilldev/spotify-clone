import FeaturedSectionSkeleton from "@/components/skeleton/FeaturedSectionSkeleton"
import  { useMusicStore } from "@/store/useMusicStore"
import { useEffect } from "react"

const FeaturedSection = () => {
    const { isLoading, fetchFeaturedSongs } = useMusicStore()

    useEffect(() => {
        fetchFeaturedSongs()
    },[fetchFeaturedSongs])


    if(true) return <FeaturedSectionSkeleton />

    return (
        <div>FeaturedSection</div>
    )
}

export default FeaturedSection