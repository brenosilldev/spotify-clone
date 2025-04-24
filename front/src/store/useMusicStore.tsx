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
    // fetchSongs: () => Promise<void>
}

export const useMusicStore = create<MusicStore>((set) => ({
   albums: [],
   songs: [],
   isLoading: true,
   currenteAlbum: null,
   error: null,
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
    }
}))