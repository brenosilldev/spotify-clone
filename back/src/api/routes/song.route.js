import { Router } from "express";
import { ProtecteRoute, RequerAdmin } from "../middleware/middelware.js";
import { GetAllSongs,GetRandomFeaturedSongs} from "../controllers/songs.controller.js";

const RouterSong = Router();


RouterSong.get("/songs", ProtecteRoute,RequerAdmin,GetAllSongs)
RouterSong.get("/featured", ProtecteRoute,RequerAdmin,GetRandomFeaturedSongs)
RouterSong.get("/made-for-you", ProtecteRoute,RequerAdmin,GetRandomFeaturedSongs)
RouterSong.get("/trending", ProtecteRoute,RequerAdmin,GetRandomFeaturedSongs)

export default RouterSong