import { db } from "../db.js";

export const getUsers = (_, res) => {
    const a = `SELECT * FROM visitante`;
    

    db.query(a, (err, data) => {
        if(err) return res.json(err);
        return res.status(200).json(data);

    })

   

  
}

