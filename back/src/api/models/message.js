import mongoose from "mongoose";

const Schema = mongoose.Schema({
    message: {  
        type: String,
        required: true    
    },
    sender: {
        type: String,
        required: true
    },
    receiver: {
        type: String,
        required: true
    }    
    }, {timestamps: true})