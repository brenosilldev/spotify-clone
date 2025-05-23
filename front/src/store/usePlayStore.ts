import api from '@/lib/Axios'
import { create } from 'zustand'
import { songs } from '@/@types'


type PlayStore = {
    currentSong: string | null,
    isPlaying: boolean,
    queue: songs[];
    currentIndez : number;

    initializeQueue : (songs:songs[]) => void;
    playAlbum : (song:songs,startindex?:number) => void;
    setCurrenteSong: (song:songs | null) => void;
    togglePlay: () => void;
    playNextSong : () => void
    playPreviousSong : () => void
}

const usePlayStore = create<PlayStore>((set,get) => ({
    currentSong: null,
    isPlaying: false,
    queue: [],
    currentIndez : -1,


    initializeQueue : (songs:songs[]) => {

    },
    playAlbum : (song:songs,startindex?:number) => {

    },
    setCurrenteSong: (song:songs | null) => {

    },
    togglePlay: () => {
       
    },
    playNextSong : () => {
       
    },
    playPreviousSong : () => {
       
    },
  

}))