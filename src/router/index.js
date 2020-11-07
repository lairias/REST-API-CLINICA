const express = require("express");
const router = express.Router();
const {PER_TEL_COR_USU}= require('../controllers/PERSONA_tel_cor_usu');
const {Login} = require('../controllers/Login');
const {
  InfoPersonas,
  Infopersona,
  NuevaPersona,
  UpdatePersona,
  DeletePersona,
} = require("../controllers/Pe_personas.js");
const {
  Telefonos,
  Telefono,
  NuevoTelefono,
  UpdateTelefono,
  DeleteTelefono,
} = require("../controllers/Pe_telefono.js");
module.exports = function () {
  router.post("/personaTEL", PER_TEL_COR_USU);
  router.post("/login", Login);
  router.get("/personas", InfoPersonas);
  router.put("/persona/:id", UpdatePersona);
  router.get("/persona/:id", Infopersona);
  router.post("/persona", NuevaPersona);
  router.delete("/persona/:id", DeletePersona);
  router.get("/telefono", Telefonos);
      router.get("/telefono/:id",Telefono);
      router.post("/telefono",NuevoTelefono);
      router.put("/telefono/:id",UpdateTelefono);
      router.delete("/telefono/:id",DeleteTelefono);
  return router;
};





























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



