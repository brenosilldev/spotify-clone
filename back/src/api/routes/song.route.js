import { Router } from "express";
import { ProtecteRoute, RequerAdmin } from "../middleware/middelware.js";
import { GetAllSongs,GetRandomFeaturedSongs} from "../controllers/songs.controller.js";

const RouterSong = Router();


RouterSong.get("/songs", ProtecteRoute,RequerAdmin,GetAllSongs)
RouterSong.get("/featured",GetRandomFeaturedSongs)
RouterSong.get("/made-for-you",GetRandomFeaturedSongs)
RouterSong.get("/trending",GetRandomFeaturedSongs)

export default RouterSong