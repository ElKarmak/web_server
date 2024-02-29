import Express from "express";
import mysql from "mysql2/promise";
const appServer = Express();

const connection = await mysql.createConnection({
  host: "localhost",
  user: "victor",
  database: "bancaria",
  password: "manuel123"
});

appServer.get("/", async function (request, responsed) {
  const datos = await connection.query(`SELECT COUNT ( c.nombreCliente) AS TotalclientesConPrestamo
  FROM cliente as c JOIN prestatario as p ON c.nombreCliente = p.nombreCliente;`)
  
  return res.json(datos[0][0])
});

appServer.listen(3030, function () {
  console.log("Servidor listo! " + "http://localhost:3030");
});
