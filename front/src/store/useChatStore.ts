import api from '@/lib/Axios'
import {create} from 'zustand'

interface ChatStore {
    users: any[],
    fetchusers : () => Promise<void>,
    isLoading : boolean,
    error : string | null
}

export const useChatStore = create<ChatStore>((set) => ({
    users: [],
    isLoading:false,
    error: null,
    fetchusers: async () => {
        set({isLoading: true,error: null})
        try {
            const response = await api.get('/users/users')
            console.log(response.data)
            set({ users: response.data })
        } catch (error:any) {
            set({ error: error.message })
        }finally{
            set({isLoading: false})
        }
    }
}))