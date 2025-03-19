import { Router } from "express";

const RouterSong = Router();


RouterSong.get("/", (req, res) => {    
    res.send("admin");
})

export default RouterSong