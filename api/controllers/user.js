import { db } from "../db.js";

//função getUsers, vai lá no banco de dados e nos trás todas as informações
export const getUsers = (_, res) => {
    const q = "SELECT * FROM usuarios";

    db.query(q, (err, data) => {
        if (err) return res.json(err)

        return res.status(200).json(data)
    });
};

//função que vai adicionar um novo usuário
export const addUser = (req, res) => {
    const q = 'INSERT INTO usuarios(`nome`, `email`, `fone`, `data_nascimento`) VALUES(?)';


    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.data_nascimento,
    ];

    db.query(q, [values], (err) => {
        if(err) return res.json(err)

        return res.status(200).json("Usuário criado com sucesso!")
    });
};

//função que vai atualizar um usuário existente
export const updateUser = (req, res) => {
    const q = 'UPDATE usuarios SET `nome` = ?, `email` = ?, `fone` = ?, `data_nascimento` = ? WHERE `id` = ?';

    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.data_nascimento,
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json('Usuário atualizado com sucesso!')
    });
};

//função que vai excluir um usuário já existente
export const deleteUser = (req, res) => {
    const q = 'DELETE FROM usuarios WHERE `id` = ?';

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json('Usuário deletado com sucesso!')
    });
};