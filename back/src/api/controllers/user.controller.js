

import User  from "../models/user.model.js";

const CreateUser = async (req, res) => {

    try{
        const {id,name ,imageurl,email} = req.body

        const user = await User.find({clerkID:id})

        if(!user){
            const newUser = new User({
                clerkID:id,
                name,
                email,
                imageurl
            })

            const savedUser = await newUser.save()
            res.status(200).json({success:true, message:"User Created",user:savedUser})
        }

    }catch(error){
        next(error)
    }

}

const GetAllUsers = async (req, res) => {
    try {
        const currenteUserId = req.auth.userID
        const users = await User.find({clerkID:{$ne:currenteUserId}})
        res.json(users);
    } catch (error) {
        console.error(error);
        next(error)
    }
};



export{ CreateUser, GetAllUsers}