
export interface songs {
    _id: string;
    title: string;
    artist: string;
    imageUrl: string;
    duration: number;
    relaseYear: number;
    AudioUrl: string;
    createdAt: string;
    updatedAt: string;
}

export interface Album {
    _id: string;
    title: string;
    artist: string;
    imageUrl: string;
    relaseYear: number;
    songs: songs[];
}