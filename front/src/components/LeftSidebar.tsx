import { cn } from '@/lib/utils'
import { HomeIcon, Library, MessageCircle, Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ScrollArea } from "@/components/ui/scroll-area"
import PlaylistItemSkeleton from './skeleton/PlaylistItemSkeleton'
import { SignedIn } from '@clerk/clerk-react'
import { buttonVariants } from './ui/button'

const LeftSidebar = () => {
    const isLoading = true

    return (
        <div className="h-full flex flex-col gap-2 p-1">
            <div className='rounded-lg bg-zinc-900 p-2'>
                <div className='space-y-2'>
                    <Link
                        to={"/"}
                        className={cn(
                            buttonVariants({
                                variant: "ghost",
                                className: "w-full justify-start text-white hover:bg-zinc-800",
                            })
                        )}
                    >
                        <HomeIcon className='mr-2 size-5' />
                        <span className='hidden md:inline'>Home</span>
                    </Link>

                    <SignedIn>
                        <Link
                            to={"/chat"}
                            className={cn(
                                buttonVariants({
                                    variant: "ghost",
                                    className: "w-full justify-start text-white hover:bg-zinc-800",
                                })
                            )}
                        >
                            <MessageCircle className='mr-2 size-5' />
                            <span className='hidden md:inline'>Messages</span>
                        </Link>
                    </SignedIn>
                </div>
            </div>

            <div className='rounded-lg bg-zinc-900 p-2'>
                <div className='flex items-center justify-between mb-4'>
                    <div className='flex items-center text-white px-2'>
                        <Library />
                        <span className='ml-2'>Playlists</span>
                    </div>
                </div>
                <ScrollArea className="h-[calc(100vh-300px)]">
                    <div className='space-y-2'>

                        {isLoading  ?  (
                            <PlaylistItemSkeleton />
                        ) : (
                            <div className='flex items-center text-white px-2'>
                                <Play className='mr-2 size-5'/>
                                <span className=''> Playlist 1</span>
                            </div>
                        )}

                        
                    </div>
                
                </ScrollArea>   
            </div>
        </div>
    )
}

export default LeftSidebar