import mongoose from "mongoose";

const Model = mongoose.Schema(({
    name: String,
    email: String,
    password: String,
    clerkID:{
        type:string,
        unique: true
    },
    imageurl :{
        type:String
    }
} , {timestamps: true}))

export const User = mongoose.model("User", Model);

