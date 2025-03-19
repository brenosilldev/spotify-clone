import mongoose from "mongoose";
import { Song } from "./song.mdel";

const Schema = mongoose.Schema({
    WebTransportBidirectionalStream: { 
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    Imageurl: {
        type: String,
        required: true
    },
    relaseYear : { type:Number, required: true},
    songs : [{type: mongoose.Schema.Types.ObjectId, ref: "Song"}]


}, {timestamps: true})

export const Album = mongoose.model("Album", Schema);