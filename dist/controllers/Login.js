"use strict";

var Mysql = require('../config/database');

var _require = require("../lib/Encript.js"),
    MachCrip = _require.MachCrip;

exports.Login = function (req, res, next) {
  try {
    Mysql.query("SELECT * FROM 'pe_usuario' WHERE 'NOM_USUARIO' = '".concat(req.body.NOM_USUARIO, "'"), function (err, user, field) {
      if (user.length > 0) {
        console.log(user[0]);

        if (MachCrip(req.body.PAS_USUARIO, user[0].PAS_USUARIO)) {
          res.json('bienvenido');
        } else {
          res.json('usuario o contrasela incorecta');
        }
      } else {
        res.json('usuario o contrase;a incorescta');
      }
    });
  } catch (error) {
    console.log(error);
    next();
  }
};