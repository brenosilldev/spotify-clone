import mongoose from "mongoose";


const Schema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
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

const Album = mongoose.model("Album", Schema);


export default Album