import { User } from "../models/user.model";

export const getAllUsers = async () => {
    const users = await User.find();
    
    return users;
}