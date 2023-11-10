import express from "express";
import { getUsers, addUser, updateUser, deleteUser } from "../controllers/user.js";

//indicando que é uma rota
const router = express.Router();

//método get, eu quero pegar alguma informação da rota raiz e utilizar o getUsers
router.get("/", getUsers);

//método para adicionar um novo usuário
router.post('/', addUser)

//método para atualizar algum usuário existente
router.put('/:id', updateUser)

//método para deletar algum usuário existente
router.delete('/:id', deleteUser)

//exportando a rota
export default router;