import { Router } from "express";
const RouterAuth = Router();

import { callbackAuth  } from "../controllers/auth.controller.js";

RouterAuth.get("/callback",callbackAuth )

export default RouterAuth