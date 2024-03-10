import mysql2 from "mysql2";
// import db from './src/db.js';


export const db = mysql2.createConnection({
    host: "localhost",
    user: "lindolfo",
    password: "1234",
    database: "formulario2",
    port: 3308
})

// Executa a primeira consulta
db.query('SELECT * FROM visitantes', (error1, results1, fields1) => {
    if (error1) {
        console.error('Erro ao executar a consulta de visitantes:', error1);
        return;
    }
    console.log('Resultado da consulta de visitantes:', results1);

    // Executa a segunda consulta dentro do callback da primeira consulta
    db.query('SELECT * FROM usuarios', (error2, results2, fields2) => {
        if (error2) {
            console.error('Erro ao executar a consulta de usuários:', error2);
            return;
        }
        console.log('Resultado da consulta de usuários:', results2);
    });
});


//PERMISSAO PARA O USUARIO LINDOLFO TER ACESSO AO BANCO DE DADOS MYSQL: CREATE USER 'lindolfo'@'localhost' IDENTIFIED BY '1234';

//REGISTRO DO USUARIO NO MYSQL: GRANT ALL PRIVILEGES ON formulario.* TO 'lindolfo'@'localhost';
// PARA STARTAR: npm start e depois node index.js
                 