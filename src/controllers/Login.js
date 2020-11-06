//Seccion de las importaciones
const Mysql = require('../config/database');
//fin de las seccion de las importaciones
const { MachCrip } = require("../lib/Encript.js");

//seccion de los controllers

exports.Login=  (req,res,next)=>{

    
   
try{

     Mysql.query(`SELECT * FROM 'pe_usuario' WHERE 'NOM_USUARIO' = '${req.body.NOM_USUARIO}'`,(err ,user,field)=>{
         if(user.length>0){
             console.log(user[0])
             if(MachCrip(req.body.PAS_USUARIO,user[0].PAS_USUARIO)){
                 res.json('bienvenido')
             }else{
                 res.json('usuario o contrasela incorecta')
             }
         }else{
           res.json('usuario o contrase;a incorescta')
         }
       
        })
}catch(error){
    console.log(error);
    next();
}

}
