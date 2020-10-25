//Seccion de las 
const express = require("express");
const router = express.Router()

const {
  InfoPersonas,
  Infopersona,
  NuevaPersona,
  UpdatePersona,
  DeletePersona
} = require("../controllers/Pe_personas.js");

const {
Telefonos,
Telefono,
NuevoTelefono,
}= require('../controllers/Pe_telefono.js')





module.exports = function (){
  //Rutas de Pe_personas
    router.get('/personas',InfoPersonas);
    router.put("/persona/:id", UpdatePersona);
    router.get('/persona/:id',Infopersona);
    router.post('/persona',NuevaPersona);
    router.delete("/persona/:id", DeletePersona);
    //FIn de rutas de Pe_personas

    //rutas de telefono
    router.get('/telefono',Telefonos)
    router.get('/telefono/:id',Telefono)


    return router;


}



