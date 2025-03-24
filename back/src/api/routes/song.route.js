import { Router } from "express";
import { ProtecteRoute, RequerAdmin } from "../middleware/middelware";

const RouterSong = Router();


RouterSong.post("/", (req, res) => {    
    res.send("admin");
})

export default RouterSong