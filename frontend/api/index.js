//importado modulos
import express from 'express';
import userRoutes from './routes/users.js';
import cors from 'cors';

//criado instancia do express
const app = express();

//para usar o json para posts, put
app.use(express.json());

//para permitir qualquer um de fazer uma requisição para o backend
app.use(cors());

//na raiz do projeto, vai ser chamado a função userRoutes
app.use("/", userRoutes);

//para escutar na porta 8800
app.listen(8800);