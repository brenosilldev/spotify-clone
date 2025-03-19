import mongoose from "mongoose";


const Schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    AudioUrl: {
        type: String,
        required: true
    },
    imageurl :{
        type:String
    },
    duration: {
        type: String,
        required: true
    },  
    year: {
        type: String,
        required: true
    },  
    views: {
        type: Number,
        required: false
    },  
    likes: {
        type: Number,
        required: false
    },  
    dislikes: {
        type: Number,
        required: false
    },  
    album: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Album",
        required: false
     
    },  
} , {timestamps: true});

export const Song = mongoose.model("Song", Schema);