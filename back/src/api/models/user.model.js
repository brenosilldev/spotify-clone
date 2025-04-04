import mongoose from "mongoose";

const Model = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique :true,
    },
    password: {
        type: String,
        required: false
    },
    clerkID:{
        type:String,
        unique: true
    },
    imageurl :{
        type:String
    }
} , {timestamps: true})

const User = mongoose.model("Users", Model);

export default User
