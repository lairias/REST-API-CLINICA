//Seccion de las 
const express = require("express");
const router = express.Router()

//-------------------------------------------------------secccion de controllers

//Procesos almacenados 
const {PER_TEL_COR_USU}= require('../controllers/PERSONA_tel_cor_usu')

//lLogin
const {Login} = require('../controllers/Login')

//Persona
const {
  InfoPersonas,
  Infopersona,
  NuevaPersona,
  UpdatePersona,
  DeletePersona,
} = require("../controllers/Pe_personas.js");
//Telefono
const {
  Telefonos,
  Telefono,
  NuevoTelefono,
  UpdateTelefono,
  DeleteTelefono,
} = require("../controllers/Pe_telefono.js");
//--------------------------------------------------------fin de los controllers



module.exports = function () {
  //RUTA registro
  router.post("/personaTEL", PER_TEL_COR_USU);
  //RUTA login
  router.post("/login", Login);
  //RUTA personas
  router.get("/personas", InfoPersonas);
  router.put("/persona/:id", UpdatePersona);
  router.get("/persona/:id", Infopersona);
  router.post("/persona", NuevaPersona);
  router.delete("/persona/:id", DeletePersona);
  //FIn de rutas de Pe_personas

  //RUTA telefono
  router.get("/telefono", Telefonos);
      router.get("/telefono/:id",Telefono);
      router.post("/telefono",NuevoTelefono);
      router.put("/telefono/:id",UpdateTelefono);
      router.delete("/telefono/:id",DeleteTelefono);

  //Ruta de doctores
      // router.post('/doctor',NuevoDoctor)

  return router;
};;





























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



