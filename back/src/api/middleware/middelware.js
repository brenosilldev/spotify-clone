import verify from "jsonwebtoken";
import { authenticateRequest, clerkClient  } from "@clerk/express";
import UserModel from "../models/user.model.js";

 const ProtecteRoute = async (req, res, next) => {
    if(!req.auth.userID){
       return  res.status(400).json({success:false,message:'Unathorized - No Token Provided.'})
    }
    next();

}


const RequerAdmin  = async (req, res, next) => {
    try{
        const currentUser = await clerkClient.users.getUser(req.auth.userID);
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