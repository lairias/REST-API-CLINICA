"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Mysql = require("../config/database.js");

exports.Telefonos = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var sql;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            sql = "SELECT * FROM pe_telefono";
            _context.prev = 1;
            _context.next = 4;
            return Mysql.query(sql, function (error, rows, fils) {
              res.json(rows);
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

exports.Telefono = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var id, slq;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            slq = "SELECT * FROM pe_telefono  WHERE COD_TELEFONO ='".concat(id, "'");
            _context2.prev = 2;
            _context2.next = 5;
            return Mysql.query(slq, function (error, rows, fils) {
              res.json(rows);
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

exports.NewTelefono = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var _req$body, NUM_TELEFONO, TIP_TELEFONO, DES_TELEFONO, FEC_REGISTRO, sql;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, NUM_TELEFONO = _req$body.NUM_TELEFONO, TIP_TELEFONO = _req$body.TIP_TELEFONO, DES_TELEFONO = _req$body.DES_TELEFONO, FEC_REGISTRO = _req$body.FEC_REGISTRO;
            sql = "INSERT INTO pe_telefono(NUM_TELEFONO,TIP_TELEFONO,DES_TELEFONO,FEC_REGISTRO)\n    VALUES('".concat(NUM_TELEFONO, "','").concat(TIP_TELEFONO, "','").concat(DES_TELEFONO, "','").concat(FEC_REGISTRO, "')");
            console.log(sql);
            _context3.prev = 3;
            _context3.next = 6;
            return Mysql.query(sql, function (error) {
              if (!error) {
                res.json("GUARDADO");
              }
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

exports.UpTelefono = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
    var id, _req$body2, NUM_TELEFONO, TIP_TELEFONO, DES_TELEFONO, FEC_REGISTRO, Query;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, NUM_TELEFONO = _req$body2.NUM_TELEFONO, TIP_TELEFONO = _req$body2.TIP_TELEFONO, DES_TELEFONO = _req$body2.DES_TELEFONO, FEC_REGISTRO = _req$body2.FEC_REGISTRO;
            Query = "UPDATE pe_telefono SET \n    NUM_TELEFONO='".concat(NUM_TELEFONO, "',\n    TIP_TELEFONO='").concat(TIP_TELEFONO, "',\n     DES_TELEFONO ='").concat(DES_TELEFONO, "',\n    FEC_REGISTRO = '").concat(FEC_REGISTRO, "'\n    WHERE 'COD_TELEFONO' = '").concat(id, "'\n    ");
            console.log(Query);
            console.log(id);
            _context4.prev = 5;
            _context4.next = 8;
            return Mysql.query(Query, function (error) {
              if (!error) {
                res.json("Actualizado");
              }
            });

          case 8:
            _context4.next = 14;
            break;

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](5);
            console.log(_context4.t0);
            next();

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[5, 10]]);
  }));

  return function (_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

exports.DeleteTelefono = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res, next) {
    var id, Query;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            Query = "\n    DELETE FROM pe_telefono  WHERE COD_TELEFONO = '".concat(id, "'\n    ");
            _context5.prev = 2;
            _context5.next = 5;
            return Mysql.query(Query, function (error) {
              if (!error) {
                res.json("Eliminado");
              }
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