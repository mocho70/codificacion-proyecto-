import express from 'express';
import mysql from 'mysql2/promise';
import cors from 'cors'


const app = express();
app.use(cors());

//conexion a la base de datos
const pool =  mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'personal',
  });
//conectar a la base de datos y tarer informacion
app.get('/login',async (req,res)=>{
    const datos = req.query
    try {
        const [results, fields] = await pool.query(
          "SELECT * FROM `usuarios` WHERE `usuario` = ? AND `contraseña` = ?",
          [datos.usuario,datos.contraseña]
        );
        if(results.length >0){
            res.status(200).send("inicio de sesion correctos")

        }else{
            res.status(401).send("error de inicio de sesion")
        }
      
        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
      } catch (err) {
        console.log(err);
      }

})


//
app.get('/', (req, res) => {
  res.send('Hello World')
});

app.listen(3000);
console.log("servidor funcionando en el puerto,3000");