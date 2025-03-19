import { Router } from "express";
import {getAllUsers,CreateUser} from "../controllers/user.controller.js"
const RouterAuth = Router();


RouterAuth.get("/users",getAllUsers)
RouterAuth.post("/user",CreateUser)

export default RouterAuth