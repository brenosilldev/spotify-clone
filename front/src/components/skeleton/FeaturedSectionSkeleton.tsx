

const FeaturedSectionSkeleton = () => {
    return (
        <div className="grid grid-cols-12 sm:grid-cols-2 md:grid-cols-3 gap-4">

            {Array.from({ length: 5}, (_, index) => (
                <div
                    key={index}
                    className="p-2 rounded-md flex items-center gap-3 bg-zinc-400/10"
                >
                    <div className="w-16 sm:w-20 h-12 bg-zinc-800 rounded-md flex-shrink-0 animate-pulse "/>
                    <div className="flex-1 min-w-0 hidden md:block space-y-2">
                        <div className= "h-4 bg-zinc-800 rounded animate-pulse w-3/4"></div>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default FeaturedSectionSkeleton