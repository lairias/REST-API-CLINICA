

const mysql = require('mysql');

require('dotenv').config();

const conexion = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USR_DB,
  password: process.env.PASS_DB,
  database: process.env.BASE_DB,
});

conexion.connect( (error)=>{
   if(error){
       console.log(error);
       return;
   }
   else{
       console.log('conectado a la base de datos');
   }
}
)

module.exports = conexion;