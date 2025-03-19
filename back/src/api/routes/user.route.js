import { Router } from "express";
const routerUser = Router();


/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Obtém lista de usuários
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
routerUser.get("/", (req, res) => {    
    res.json([{id: "1", name: "Usuário Exemplo", email: "usuario@exemplo.com"}]);
});

// Adicione mais rotas conforme necessário

export default routerUser