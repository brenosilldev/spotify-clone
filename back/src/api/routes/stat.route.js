import { Router } from "express";

const RouterState = Router();


RouterState.get("/", (req, res) => {    
    res.send("admin");
})

export default RouterState