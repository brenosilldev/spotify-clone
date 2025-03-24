import { Router } from "express";
const RouterAdmin = Router();
import { CreateSong } from "../controllers/admin.controller";
import { ProtecteRoute, RequerAdmin } from "../middleware/middelware";


RouterAdmin.get("/create_song", ProtecteRoute, RequerAdmin,CreateSong)

export default RouterAdmin