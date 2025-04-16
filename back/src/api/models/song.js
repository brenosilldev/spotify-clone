import mongoose from "mongoose";


const Schema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    audioUrl: {
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
    
    relaseYear: {
        type: String,
        required: false
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

 const Song = mongoose.model("Song", Schema);

 export default Song