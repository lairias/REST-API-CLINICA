//Seccion de las 
const express = require("express");
const router = express.Router()

const Mysql = require('../config/database')


module.exports = function(){

router.post('/persona',(req,res)=>{
  
console.log(req.body)
const {
ID_PERSONA, 
FOT_PERSONA, 
NOM_PERSONA, 
APE_PERSONA,  
SEX_PERSONA,     
FEC_NACIMIENTO,  
NUM_TELEFONO,  
TIP_TELEFONO,  
DES_TELEFONO,
FEC_REGISTRO, 
DES_CORREO, 
DOM_CORREO,  
NOM_USUARIO, 
PAS_USUARIO,
FEC_CREACION,
TIP_USUARIO 

} = req.body;


const sql = `CALL INS_PERSONA_TE_CORR(
'${ID_PERSONA}', 
'${FOT_PERSONA}', 
'${NOM_PERSONA}', 
'${APE_PERSONA}',  
'${SEX_PERSONA}',     
'${FEC_NACIMIENTO}',  
'${NUM_TELEFONO}',  
'${TIP_TELEFONO}',  
'${DES_TELEFONO}', 
'${FEC_REGISTRO}', 
'${DES_CORREO}', 
'${DOM_CORREO}',  
'${NOM_USUARIO}', 
'${PAS_USUARIO}',
'${FEC_CREACION}',
'${TIP_USUARIO}'
  );`;
  console.log(sql)
  
  try {
    Mysql.query(sql, function (error) {
      if (!error) {
        res.json({
          message: "Persona creada",
        });
      }
    });
  } catch (erro) {
    console.log(erro);
    next();
  }


})

  return router
}
























// const {
//   InfoPersonas,
//   Infopersona,
//   NuevaPersona,
//   UpdatePersona,
//   DeletePersona
// } = require("../controllers/Pe_personas.js");

// const {
// Telefonos,
// Telefono,
// NuevoTelefono,
// UpdateTelefono,
// DeleteTelefono
// }= require('../controllers/Pe_telefono.js')





// module.exports = function (){
//   //Rutas de Pe_personas
//     router.get('/personas',InfoPersonas);
//     router.put("/persona/:id", UpdatePersona);
//     router.get('/persona/:id',Infopersona);
//     router.post('/persona',NuevaPersona);
//     router.delete("/persona/:id", DeletePersona);
//     //FIn de rutas de Pe_personas

//     //rutas de telefono
//     router.get("/telefono",Telefonos);
//     router.get("/telefono/:id",Telefono);
//     router.post("/telefono",NuevoTelefono);
//     router.put("/telefono/:id",UpdateTelefono);
//     router.delete("/telefono/:id",DeleteTelefono);




//     return router;


// }



