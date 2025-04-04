import { Router } from "express";
import { GetAllAlbums,GetAlbumId} from "../controllers/album.controller.js";
const RouterAlbum = Router();


RouterAlbum.get("/albums",GetAllAlbums); 
RouterAlbum.get("/:albumId",GetAlbumId); 

export default RouterAlbum