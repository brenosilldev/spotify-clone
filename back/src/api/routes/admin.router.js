import { Router } from "express";
const routerAdmin = Router();

/**
 * @swagger
 * /api/admin:
 *   get:
 *     summary: Retorna informação do admin
 *     tags: [Admin]
 *     responses:
 *       200:
 *         description: Informação do admin
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 */
routerAdmin.get("/", (req, res) => {    
    res.send("admin");
})

export default routerAdmin