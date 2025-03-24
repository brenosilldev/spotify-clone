import { Router } from "express";
const RouterUser = Router();


RouterUser.get("/callback", (req, res) => {    
    res.json([{id: "1", name: "Usuário Exemplo", email: "usuario@exemplo.com"}]);
});

// Adicione mais rotas conforme necessário

export default RouterUser