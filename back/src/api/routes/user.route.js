import { Router } from "express";
const RouterUser = Router();
import { ProtecteRoute,RequerAdmin} from "../middleware/middelware.js";
import {GetAllUsers} from "../controllers/user.controller.js";

RouterUser.get("/users",ProtecteRoute,GetAllUsers);

// Adicione mais rotas conforme necessário

export default RouterUser