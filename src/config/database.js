

const mysql = require('mysql');

require('dotenv').config();

const conexion = mysql.createConnection({
  host: "http://3.80.201.140/",
  user: "root",
  password: "root",
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