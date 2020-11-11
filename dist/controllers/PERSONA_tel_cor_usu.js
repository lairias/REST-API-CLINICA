"use strict";

var Mysql = require("../config/database");

var _require = require("../lib/Encript.js"),
    encripPas = _require.encripPas;

exports.PER_TEL_COR_USU = function (req, res, next) {
  var _req$body = req.body,
      ID_PERSONA = _req$body.ID_PERSONA,
      FOT_PERSONA = _req$body.FOT_PERSONA,
      NOM_PERSONA = _req$body.NOM_PERSONA,
      APE_PERSONA = _req$body.APE_PERSONA,
      SEX_PERSONA = _req$body.SEX_PERSONA,
      FEC_NACIMIENTO = _req$body.FEC_NACIMIENTO,
      NUM_TELEFONO = _req$body.NUM_TELEFONO,
      TIP_TELEFONO = _req$body.TIP_TELEFONO,
      DES_TELEFONO = _req$body.DES_TELEFONO,
      FEC_REGISTRO = _req$body.FEC_REGISTRO,
      DES_CORREO = _req$body.DES_CORREO,
      DOM_CORREO = _req$body.DOM_CORREO,
      NOM_USUARIO = _req$body.NOM_USUARIO,
      PAS_USUARIO = _req$body.PAS_USUARIO,
      FEC_CREACION = _req$body.FEC_CREACION,
      TIP_USUARIO = _req$body.TIP_USUARIO;
  var password = encripPas(PAS_USUARIO);
  var sql = "CALL INS_PERSONA_TE_CORR('".concat(ID_PERSONA, "', '").concat(FOT_PERSONA, "', '").concat(NOM_PERSONA, "', '").concat(APE_PERSONA, "',  '").concat(SEX_PERSONA, "',     '").concat(FEC_NACIMIENTO, "',  '").concat(NUM_TELEFONO, "',  '").concat(TIP_TELEFONO, "','").concat(DES_TELEFONO, "', '").concat(FEC_REGISTRO, "', '").concat(DES_CORREO, "', '").concat(DOM_CORREO, "',  '").concat(NOM_USUARIO, "', '").concat(password, "','").concat(FEC_CREACION, "','").concat(TIP_USUARIO, "');");

  try {
    Mysql.query("select * from pe_usuarios  WHERE NOM_USUARIO = '".concat(NOM_USUARIO, "'"), function (err, row, fledns) {
      if (JSON.stringify(row).length === 2) {
        Mysql.query(sql, function (error) {
          if (!error) {
            res.json({
              message: true
            });
          }
        });
      } else {
        res.json({
          message: false
        });
      }
    });
  } catch (erro) {
    console.log(erro);
    next();
  }
};