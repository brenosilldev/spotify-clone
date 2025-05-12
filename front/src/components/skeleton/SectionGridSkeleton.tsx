

const SectionGridSkeleton = () => {
    return (
        <div className="mb-8">
            <div className="h-8 w-48 bg-zinc-800 rounded-md animate-pulse">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {Array.from({ length: 4 }, (_, index) => (
                        <div key={index} className="bg-zinc-800/40 p-4 rounded-md animate-pulse">
                            <div  className="apesct-square bg-zinc-800 rounded-md"/>
                            <div className="h-4 bg-zinc-700 rounded w-3/4 mb-2" />
                            <div  className="h-4 bg-zinc-700 w-1/2"/>

                        </div>
                    ))}

                </div>
            </div>

        </div>
    )
}

export default SectionGridSkeleton