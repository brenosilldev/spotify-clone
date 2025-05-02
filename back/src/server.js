import  express  from "express";
import dotenv from "dotenv";
import cors from 'cors'
import { clerkMiddleware} from "@clerk/express"
import path from "path";
import fileUpload from "express-fileupload";
import { connectDB } from "./config/db.js";


import RouterAdmin from "./api/routes/admin.router.js";
import RouterUser from "./api/routes/user.route.js";
import RouterSong from "./api/routes/song.route.js";
import RouterAlbum from "./api/routes/album.route.js";
import RouterState from "./api/routes/stat.route.js";
import RouterAuth from "./api/routes/auth.router.js";




const app = express();
const port = process.env.PORT || 5000;
dotenv.config();

const _dirname = path.resolve();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}))

app.use(express.json({ limit: '50mb' })); 

// app.use(ClerkExpressRequireAuth({}));

app.use('/v1/songs', RouterSong)
app.use('/v1/albums', RouterAlbum)

app.use('/v1/users', RouterUser)
app.use('/v1/admin', RouterAdmin)
app.use('/v1/auth', RouterAuth)

app.use(clerkMiddleware({ 
    publishableKey: process.env.CLERK_PUBLISHABLE_KEY,
    apiKey: process.env.CLERK_API_KEY,
}))
app.use('/v1/stats', RouterState)


app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: path.join(_dirname, 'tmp'),
    createParentPath: true,
    limits: { fileSize: 10 * 1024 * 1024 }
}));

app.use((err, req, res, next) => {
    
    console.error("Erro interno:", err);
    res.status(500).json({
        message: process.env.NODE_ENV === "production" ? "Internal Server Error" : err.message,
    });
});


app.listen(port, () => {
    connectDB();
    console.log("Server is running on port 5000");
})