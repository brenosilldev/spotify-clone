import  express  from "express";
import dotenv from "dotenv";
import cors from 'cors'
import { clerkMiddleware} from "@clerk/express"

import RouterAdmin from "./api/routes/admin.router.js";
import RouterUser from "./api/routes/user.route.js";
import RouterSong from "./api/routes/song.route.js";
import RouterAlbum from "./api/routes/album.route.js";
import RouterState from "./api/routes/stat.route.js";
import RouterAuth from "./api/routes/auth.router.js";


import { connectDB } from "./config/db.js";


const app = express();
const port = process.env.PORT || 5000
dotenv.config();


app.use('/v1/users', RouterUser)
app.use('/v1/admin', RouterAdmin)
app.use('/v1/auth', RouterAuth)
app.use('/v1/songs', RouterSong)
app.use('/v1/albums', RouterAlbum)
app.use('/v1/stats', RouterState)
app.use(clerkMiddleware({  }))

app.use(cors({
    origin: 'http://localhost:5173',
    allowedHeaders: "Content-Type,Authorization",
    credentials: true,
}))

app.use(express.json({ limit: '50mb' })); 


app.listen(port, () => {
    connectDB();
    console.log("Server is running on port 5000");
})