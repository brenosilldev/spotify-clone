import { create } from 'zustand'
import api from '@/lib/Axios'
import { Album,songs } from '@/@types'

interface MusicStore {
    albums: Album[],
    currenteAlbum: Album | null,
    songs: songs[],
    isLoading: boolean,
    error: string | null,
    fetchAlbums: () => Promise<void>,   
    fetchAlbumsId: (id:string) => Promise<void>,   
    madeForYouSongs: songs[],
    tredingSongs: songs[],
    featuredSongs: songs[],
    fetchFeaturedSongs: () => Promise<void>,
    fetchTrendingSongs: () => Promise<void>,
    fetchMadeForYouSongs: () => Promise<void>,

}


export const useMusicStore = create<MusicStore>((set) => ({
   albums: [],
   songs: [],
   isLoading: true,
   currenteAlbum: null,
   error: null,
   madeForYouSongs: [],
   tredingSongs: [],
   featuredSongs: [],
   fetchAlbums: async () => {
        set({ isLoading: true , error: null })

        try{
            const response = await api.get('/albums/albums')   
            set({ albums: response.data })

        }catch(error : any){
            set({ error: error.message })
        }finally{
            set({ isLoading: false })
        }

        
    },
    fetchAlbumsId: async (id:string) => {
        set({ isLoading: true , error: null })
        try{
            const response = await api.get(`/albums/${id}`)
            set({ currenteAlbum: response.data })
        }catch(error : any){
                set({ error: error.message })
        }finally{
            set({ isLoading: false })
        }
    },
    fetchFeaturedSongs: async () => {
        set({ isLoading: true , error: null })
        try{
            const response = await api.get('/songs/featured')
            set({ featuredSongs: response.data })
        }catch(error : any){
            set({ error: error.response.data.message })
        }finally{
            set({ isLoading: false })
        }
    },
    fetchMadeForYouSongs : async ()=>{
        set({ isLoading: true , error: null })
        try{
            const response = await api.get('/songs/made_for_you')
            set({ madeForYouSongs: response.data })
            
        }catch(error : any){
            set({ error: error.response.data.message })
        }finally{
            set({ isLoading: false })
        }   

    },
    fetchTrendingSongs : async ()=>{
        set({ isLoading: true , error: null })
        try{
            const response = await api.get('/songs/trending')
            console.log('response: ',response.data)
            set({ tredingSongs: response.data })
            
        }catch(error : any){
            set({ error: error.response.data.message })
        }finally{
            set({ isLoading: false })
        }
    
    }
}))