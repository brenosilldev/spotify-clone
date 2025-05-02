import { create } from "zustand";
import api from "@/lib/Axios";

interface UserStore {
    isAdmin: boolean,
    isLoading: boolean,
    error : string | null,
    checkAdminStatus : () => Promise<void>,
    reset: () => void,
}

export const useUser = create<UserStore>((set) => ({
    isAdmin: false,
    isLoading: true,
    error: null,
    checkAdminStatus: async () => {
        set({ isLoading: true, error: null })
        try {
            const response = await api.get('/users/check_admin')
            set({ isAdmin: response.data.admin })
        } catch (error: any) {
            set({ error: error.response.data.message , isAdmin: false })
        } finally {
            set({ isLoading: false })
        }
    },    
    reset: () => {
        set({
            isAdmin: false,
            isLoading: false,
            error: null,
        })
    }

}));