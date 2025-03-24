

import {User}  from "../models/user.model.js";

const  callbackAuth = async (req, res) => {

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
        res.status(500).json({message:"Internal Server Error",error})
    }

}

// const getAllUsers = async (req, res) => {
//     try {
//         const users = await User.find();
//         res.json(users);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };



export{ callbackAuth}