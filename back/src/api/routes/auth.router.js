import { Router } from "express";
const RouterAuth = Router();

import { callbackAuth  } from "../controllers/auth.controller.js";

RouterAuth.post("/callback",callbackAuth )

export default RouterAuth