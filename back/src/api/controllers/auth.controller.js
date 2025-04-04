import User from "../models/user.model.js";

const  callbackAuth = async (req, res,next) => {
    try{
        const { id, name, imageurl, email } = req.body;
    
        let user = await User.findOne({ clerkID: id });

        if (user) {
            return res.status(200).json({ success: true, message: "User Found", user });
        }

        const newUser = new User({ clerkID: id, name, email, imageurl });
        user = await newUser.save();

        res.status(201).json({ success: true, message: "User Created", user });

    }catch(error){
        next(error)
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