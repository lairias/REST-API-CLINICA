const mysql = require('mysql');

const conexion = mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'root',
        database:'clinica'
    }
)

conexion.connect( (error)=>{
   if(error){
       console.log(error);
       retunrñ
   }
   else{
       console.log('conectado a la base de datos');
   }
}
)

module.exports = conexion;