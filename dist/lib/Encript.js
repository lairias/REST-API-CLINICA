"use strict";

var bcrypt = require("bcryptjs");

exports.encripPas = function (PAS_USUARIO) {
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(PAS_USUARIO, salt);
  return hash;
};

exports.MachCrip = function (PAS_USER, HAS) {
  var macht = bcrypt.compareSync(PAS_USER, HAS);
  return macht;
};