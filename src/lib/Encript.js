var bcrypt = require("bcryptjs");
exports.encripPas =  (PAS_USUARIO) => {
  var salt =  bcrypt.genSaltSync(10);
  var hash =  bcrypt.hashSync(PAS_USUARIO, salt);
  return hash;
};
exports.MachCrip =  (PAS_USER, HAS) => {
  const macht = bcrypt.compareSync(PAS_USER, HAS);
  return macht;
};




