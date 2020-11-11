"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Mysql = require('../config/database');

exports.Citas = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var sql;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            sql = "SELECT * FROM ci_cita";
            _context.prev = 1;
            _context.next = 4;
            return Mysql.query(sql, function (error, row, filds) {
              res.json(row);
            });

          case 4:
            _context.next = 10;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            next();

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 6]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.Cita = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var id, sql;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            sql = "SELECT * FROM ci_cita WHERE COD_CITA = '".concat(id, "';");
            _context2.prev = 2;
            _context2.next = 5;
            return Mysql.query(sql, function (error, row, filds) {
              res.json(row);
            });

          case 5:
            _context2.next = 11;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](2);
            console.log(_context2.t0);
            next();

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 7]]);
  }));

  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.NewCita = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var _req$body, COD_PACIENTE, COD_MEDICO, FEC_CITA, DIA_CITA, HOR_INI_CITA, HOR_FIN_CITA, IND_ESTADO, DES_CITA, sql;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, COD_PACIENTE = _req$body.COD_PACIENTE, COD_MEDICO = _req$body.COD_MEDICO, FEC_CITA = _req$body.FEC_CITA, DIA_CITA = _req$body.DIA_CITA, HOR_INI_CITA = _req$body.HOR_INI_CITA, HOR_FIN_CITA = _req$body.HOR_FIN_CITA, IND_ESTADO = _req$body.IND_ESTADO, DES_CITA = _req$body.DES_CITA;
            sql = "INSERT INTO ci_cita(COD_PACIENTE,COD_MEDICO,FEC_CITA,DIA_CITA,HOR_INI_CITA,HOR_FIN_CITA,IND_ESTADO,DES_CITA)VALUES('".concat(COD_PACIENTE, "','").concat(COD_MEDICO, "','").concat(FEC_CITA, "','").concat(DIA_CITA, "','").concat(HOR_INI_CITA, "','").concat(HOR_FIN_CITA, "','").concat(IND_ESTADO, "','").concat(DES_CITA, "');");
            _context3.prev = 2;
            _context3.next = 5;
            return Mysql.query(sql, function (error, row, filds) {
              res.json({
                MESSAGE: "GUARDADO"
              });
            });

          case 5:
            _context3.next = 11;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](2);
            console.log(_context3.t0);
            next();

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 7]]);
  }));

  return function (_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.UpCita = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
    var _req$body2, COD_PACIENTE, COD_MEDICO, FEC_CITA, DIA_CITA, HOR_INI_CITA, HOR_FIN_CITA, IND_ESTADO, DES_CITA, id, sql;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body2 = req.body, COD_PACIENTE = _req$body2.COD_PACIENTE, COD_MEDICO = _req$body2.COD_MEDICO, FEC_CITA = _req$body2.FEC_CITA, DIA_CITA = _req$body2.DIA_CITA, HOR_INI_CITA = _req$body2.HOR_INI_CITA, HOR_FIN_CITA = _req$body2.HOR_FIN_CITA, IND_ESTADO = _req$body2.IND_ESTADO, DES_CITA = _req$body2.DES_CITA;
            id = req.params.id;
            sql = "UPDATE ci_cita SET COD_PACIENTE ='".concat(COD_PACIENTE, "',COD_MEDICO='").concat(COD_MEDICO, "',FEC_CITA='").concat(FEC_CITA, "',DIA_CITA='").concat(DIA_CITA, "',HOR_INI_CITA='").concat(HOR_INI_CITA, "',HOR_FIN_CITA='").concat(HOR_FIN_CITA, "',IND_ESTADO='").concat(IND_ESTADO, "',DES_CITA='").concat(DES_CITA, "' WHERE COD_CITA = '").concat(id, "';");
            console.log(sql);
            _context4.prev = 4;
            _context4.next = 7;
            return Mysql.query(sql, function () {
              res.json({
                MESSAGE: "ACTUALIZADO"
              });
            });

          case 7:
            _context4.next = 13;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](4);
            console.log(_context4.t0);
            next();

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[4, 9]]);
  }));

  return function (_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

exports.DeleteCita = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res, next) {
    var id, sql;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            sql = "DELETE FROM  ci_cita WHERE COD_CITA = '".concat(id, "';");
            _context5.prev = 2;
            _context5.next = 5;
            return Mysql.query(sql, function () {
              res.json({
                MESSAGE: "ELIMINADO"
              });
            });

          case 5:
            _context5.next = 11;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](2);
            console.log(_context5.t0);
            next();

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 7]]);
  }));

  return function (_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();