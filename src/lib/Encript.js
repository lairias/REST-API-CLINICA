//seccion de las importaciones 
var bcrypt = require("bcryptjs");
//fin de las seccion de las importaciones

//encriptacion de la contrase;a
exports.encripPas =  (PAS_USUARIO) => {
  var salt =  bcrypt.genSaltSync(10);
  var hash =  bcrypt.hashSync(PAS_USUARIO, salt);
  return hash;
};

//verificacion de la contrase;a 
exports.MachCrip =  (PAS_USER, HAS) => {
  const macht = bcrypt.compareSync(PAS_USER, HAS);
  return macht;
};




