

const PlaylistItemSkeleton = () => {
    return Array.from({ length: 15 }, (_, index) => (
        <div
            key={index}
            className="p-2 rounded-md flex items-center gap-3"
        >
            <div className="w-12 h-12 bg-zinc-800 rounded-md flex-shrink-0 animate-pulse "/>
            <div className="flex-1 min-w-0 hidden md:block space-y-2">
                <div className="h-4 bg-zinc-800 rounded animate-pulse w-4/4"></div>
                <div className="h-4 bg-zinc-800 rounded animate-pulse w-2/3"></div>
            </div>
        </div>
    ))
}

export default PlaylistItemSkeleton