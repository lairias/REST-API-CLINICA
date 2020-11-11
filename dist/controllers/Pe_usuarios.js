"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Mysql = require("../config/database");

var _require = require("../lib/Encript.js"),
    encripPas = _require.encripPas;

exports.Usuarios = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var sql;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            sql = "SELECT * FROM pe_usuarios";
            Mysql.query(sql, function (error, row, filds) {
              res.json(row);
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.Usuario = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var id, sql;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            sql = "SELECT * FROM pe_usuarios WHERE COD_USUARIO = '".concat(id, "';");

            try {
              Mysql.query(sql, function (erro, row, filds) {
                res.json(row);
              });
            } catch (error) {
              console.log(erro);
              next();
            }

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.NewUsuario = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var _req$body, COD_PERSONA, NOM_USUARIO, PAS_USUARIO, FEC_CREACION, TIP_USUARIO, password, sql;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, COD_PERSONA = _req$body.COD_PERSONA, NOM_USUARIO = _req$body.NOM_USUARIO, PAS_USUARIO = _req$body.PAS_USUARIO, FEC_CREACION = _req$body.FEC_CREACION, TIP_USUARIO = _req$body.TIP_USUARIO;
            password = encripPas(PAS_USUARIO);
            sql = "INSERT INTO pe_usuarios(COD_PERSONA,NOM_USUARIO,PAS_USUARIO,FEC_CREACION,TIP_USUARIO)VALUES('".concat(COD_PERSONA, "','").concat(NOM_USUARIO, "','").concat(password, "','").concat(FEC_CREACION, "','").concat(TIP_USUARIO, "');");

            try {
              Mysql.query(sql, function () {
                res.json({
                  MESSAGE: "CREADO"
                });
              });
            } catch (error) {
              console.log(error);
              next();
            }

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.UpUsuario = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
    var _req$body2, COD_PERSONA, NOM_USUARIO, PAS_USUARIO, FEC_CREACION, TIP_USUARIO, password, id, sql;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body2 = req.body, COD_PERSONA = _req$body2.COD_PERSONA, NOM_USUARIO = _req$body2.NOM_USUARIO, PAS_USUARIO = _req$body2.PAS_USUARIO, FEC_CREACION = _req$body2.FEC_CREACION, TIP_USUARIO = _req$body2.TIP_USUARIO;
            password = encripPas(PAS_USUARIO);
            id = req.params.id;
            sql = "UPDATE  pe_usuarios SET COD_PERSONA= '".concat(COD_PERSONA, "',NOM_USUARIO='").concat(NOM_USUARIO, "',PAS_USUARIO='").concat(password, "',FEC_CREACION='").concat(FEC_CREACION, "',TIP_USUARIO='").concat(TIP_USUARIO, "' WHERE COD_USUARIO = '").concat(id, "';");

            try {
              Mysql.query(sql, function () {
                res.json({
                  MESSAGE: "ADTUALIZADO"
                });
              });
            } catch (error) {
              console.log(error);
              next();
            }

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

exports.DeleteUsuario = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res, next) {
    var id, sql;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            sql = "DELETE FROM pe_usuarios WHERE COD_USUARIO ='".concat(id, "';");

            try {
              Mysql.query(sql, function () {
                res.json({
                  MESSAGE: "ELIMINADO"
                });
              });
            } catch (error) {
              console.log(error);
              next();
            }

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function (_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();