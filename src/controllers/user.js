import { db } from "../db.js";

export const getUsers = (_, res) => {
    const q = `SELECT * FROM usuario`;
    

    db.query(q, (err, data) => {
        if(err) return res.json(err);
        return res.status(200).json(data);

    })
 
  
}
export const updateUser = (req, res) => {
    const q =
      "UPDATE usuarios SET `nome` = ?, `email` = ?, `senha` = ?, `token` = ? WHERE `id` = ?";
  
    const values = [
      req.body.nome,
      req.body.email,
      req.body.senha,
      req.body.token,
    ];
  
    db.query(q, [...values, req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Usuário atualizado com sucesso.");
    });
  };
