import { Router } from "express";
import { CheckAdmin, CreateAlbum, CreateSong, DeleteAlbum, DeleteSong } from "../controllers/admin.controller.js";
import { ProtecteRoute, RequerAdmin } from "../middleware/middelware.js";

const RouterAdmin = Router();


RouterAdmin.use(ProtecteRoute,RequerAdmin)

RouterAdmin.get("/check_admin", CheckAdmin);
RouterAdmin.post("/create_song", CreateSong);
RouterAdmin.delete("/song/:id", DeleteSong);
RouterAdmin.post("/album", CreateAlbum);
RouterAdmin.delete("/album/:id", DeleteAlbum);

export default RouterAdmin;