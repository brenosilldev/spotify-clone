import { Router } from "express";

const RouterAlbum = Router();


RouterAlbum.get("/", (req, res) => {    
    res.send("admin");
})

export default RouterAlbum