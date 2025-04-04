import { Router } from "express";
import { GetStatistics} from "../controllers/stat.controller.js";
import { ProtecteRoute } from "../middleware/middelware.js";
const RouterState = Router();


RouterState.get("/stats",ProtecteRoute,GetStatistics);

export default RouterState