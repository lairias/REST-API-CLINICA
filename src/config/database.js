

const mysql = require('mysql');

require('dotenv').config();

const conexion = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "clinica_dental",
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