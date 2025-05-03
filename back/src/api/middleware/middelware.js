import verify from "jsonwebtoken";
import { authenticateRequest, clerkClient  } from "@clerk/express";
import UserModel from "../models/user.model.js";

const ProtecteRoute = async (req, res, next) => {
    const userId = req.auth.userId;

	if (!userId) {
		return res.status(401).json({ message: "Unauthorized - you must be logged in" });
	}
	next();
};

const RequerAdmin  = async (req, res, next) => {
    try{

        const authHeader = req.headers.authorization;
        const token = authHeader.split(" ")[1];

        if(!token){
            return  res.status(400).json({success:false,message:'Unathorized - No Token Provided.'})
        }    

        const currentUser = await clerkClient.users.getUser(token);
        const isAdmin = process.env.ADMIN_CLERK_ID ===  currentUser.primaryEmailAddress?.emailAddress

        if(!isAdmin){
            res.status(403 ).json({success:false,message:'Unathorized - User is not Admin.'})
        }


        next();

    }catch(error){
        
        next(error);
    }
}


export { ProtecteRoute, RequerAdmin}