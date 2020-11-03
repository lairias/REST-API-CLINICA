//Seccion de las 
const express = require("express");
const router = express.Router()

//secccion de controllers
const {PER_TEL_COR_USU}= require('../controllers/PERSONA_tel_cor_usu')

const {Login} = require('../controllers/Login')
//fin de los controllers



module.exports = function(){

router.post('/persona',PER_TEL_COR_USU);
router.post("/login", Login);

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



