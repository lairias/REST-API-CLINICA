"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Mysql = require("../config/database");

exports.Empleados = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var sql;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            sql = "SELECT * FROM pe_empleados";
            _context.next = 3;
            return Mysql.query(sql, function (error, row, filds) {
              res.json(row);
            });

          case 3:
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

exports.Empleado = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var id, sql;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            sql = "SELECT * FROM pe_empleados WHERE COD_EMPLEADO = '".concat(id, "';");
            _context2.prev = 2;
            _context2.next = 5;
            return Mysql.query(sql, function (err, row, fild) {
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

exports.NewEmpleado = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var _req$body, COD_PERSONA, SAL_EMPLEADO, FEC_CONTRATO, EXP_CONTRATO, TIP_EMPLEADO, sql;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, COD_PERSONA = _req$body.COD_PERSONA, SAL_EMPLEADO = _req$body.SAL_EMPLEADO, FEC_CONTRATO = _req$body.FEC_CONTRATO, EXP_CONTRATO = _req$body.EXP_CONTRATO, TIP_EMPLEADO = _req$body.TIP_EMPLEADO;
            sql = "INSERT INTO pe_empleados (COD_PERSONA,SAL_EMPLEADO,FEC_CONTRATO,EXP_CONTRATO,TIP_EMPLEADO)VALUES('".concat(COD_PERSONA, "','").concat(SAL_EMPLEADO, "','").concat(FEC_CONTRATO, "','").concat(EXP_CONTRATO, "','").concat(TIP_EMPLEADO, "');");
            console.log(sql);
            _context3.prev = 3;
            _context3.next = 6;
            return Mysql.query(sql, function () {
              res.json({
                MESSAGE: "GUARDADO"
              });
            });

          case 6:
            _context3.next = 12;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](3);
            console.log(_context3.t0);
            next();

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[3, 8]]);
  }));

  return function (_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.UpEmpleado = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
    var id, _req$body2, COD_PERSONA, SAL_EMPLEADO, FEC_CONTRATO, EXP_CONTRATO, TIP_EMPLEADO, sql;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, COD_PERSONA = _req$body2.COD_PERSONA, SAL_EMPLEADO = _req$body2.SAL_EMPLEADO, FEC_CONTRATO = _req$body2.FEC_CONTRATO, EXP_CONTRATO = _req$body2.EXP_CONTRATO, TIP_EMPLEADO = _req$body2.TIP_EMPLEADO;
            sql = "UPDATE pe_empleados SET COD_PERSONA='".concat(COD_PERSONA, "',SAL_EMPLEADO='").concat(SAL_EMPLEADO, "',FEC_CONTRATO='").concat(FEC_CONTRATO, "',EXP_CONTRATO='").concat(EXP_CONTRATO, "',TIP_EMPLEADO='").concat(TIP_EMPLEADO, "' WHERE COD_EMPLEADO = '").concat(id, "'");
            _context4.prev = 3;
            _context4.next = 6;
            return Mysql.query(sql, function () {
              res.json({
                MESSAGE: "ACTUALIZADO"
              });
            });

          case 6:
            _context4.next = 12;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](3);
            console.log(_context4.t0);
            next();

          case 12:
            ;

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[3, 8]]);
  }));

  return function (_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

exports.DeleteEmpleado = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res, next) {
    var id, sql;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            sql = "DELETE FROM pe_empleados WHERE COD_EMPLEADO = '".concat(id, "';");
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