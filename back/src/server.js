import  express  from "express";
import dotenv from "dotenv";
import cors from 'cors'
// import { dbConnection} from "./lib/db.js"
import swaggerJsdoc  from 'swagger-jsdoc'
import swaggerUi  from 'swagger-ui-express';
import routerAdmin from "./api/routes/admin.router.js";
import routerUser from "./api/routes/user.route.js";
import { connectDB } from "./config/db.js";

import path from "path";
import { fileURLToPath } from "url";

// Criar `__dirname` manualmente
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



const app = express();
const port = process.env.PORT || 5000
dotenv.config();

const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'API de Música',
        version: '1.0.0',
        description: 'API para gerenciamento de usuários, músicas e álbuns',
        contact: {
          name: 'Desenvolvedor',
          email: 'dev@exemplo.com'
        }
      },
      servers: [
        {
          url: `http://localhost:${port}`,
          description: 'Servidor de desenvolvimento'
        }
      ]
    },
    // Caminho para os arquivos que contêm anotações JSDoc
    apis: [path.join(__dirname, "./routes/*.js")], // Caminho absoluto

  };

const specs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/v1/users', routerUser)
app.use('/v1/admin', routerAdmin)


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