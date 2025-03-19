import { Router } from "express";
const RouterAdmin = Router();


RouterAdmin.get("/", (req, res) => {    
    res.send("admin");
})

export default RouterAdmin