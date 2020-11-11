"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var mysqlConect = require("../config/database.js");

exports.Personas = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return mysqlConect.query("SELECT * FROM pe_personas", function (err, rows, fields) {
              console.log(rows);
              res.send(rows);
            });

          case 3:
            _context.next = 9;
            break;

          case 5:
            _context.prev = 5;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            next();

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 5]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.Persona = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var id;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            console.log(id);
            _context2.next = 5;
            return mysqlConect.query("SELECT * FROM `pe_personas` WHERE COD_PERSONA =" + id, function (err, rows, fields) {
              res.json(rows);
            });

          case 5:
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.NewPersona = function (req, res, next) {
  var _req$body = req.body,
      ID_PERSONA = _req$body.ID_PERSONA,
      FOT_PERSONA = _req$body.FOT_PERSONA,
      NOM_PERSONA = _req$body.NOM_PERSONA,
      APE_PERSONA = _req$body.APE_PERSONA,
      SEX_PERSONA = _req$body.SEX_PERSONA,
      FEC_NACIMIENTO = _req$body.FEC_NACIMIENTO;
  console.log(req.body);
  var sql = "INSERT INTO pe_personas(ID_PERSONA,FOT_PERSONA,NOM_PERSONA,APE_PERSONA,SEX_PERSONA,FEC_NACIMIENTO) VALUES('".concat(ID_PERSONA, "','").concat(FOT_PERSONA, "','").concat(NOM_PERSONA, "','").concat(APE_PERSONA, "','").concat(SEX_PERSONA, "','").concat(FEC_NACIMIENTO, "')");
  console.log(sql);
  console.log(sql);

  try {
    mysqlConect.query(sql, function (error) {
      if (!error) {
        res.json({
          message: "Persona creada"
        });
      }
    });
  } catch (erro) {
    console.log(erro);
    next();
  }
};

exports.UpPersona = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var _req$body2, ID_PERSONA, FOT_PERSONA, NOM_PERSONA, APE_PERSONA, SEX_PERSONA, FEC_NACIMIENTO, id, Query;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body2 = req.body, ID_PERSONA = _req$body2.ID_PERSONA, FOT_PERSONA = _req$body2.FOT_PERSONA, NOM_PERSONA = _req$body2.NOM_PERSONA, APE_PERSONA = _req$body2.APE_PERSONA, SEX_PERSONA = _req$body2.SEX_PERSONA, FEC_NACIMIENTO = _req$body2.FEC_NACIMIENTO;
            id = req.params.id;
            Query = "UPDATE pe_personas SET \n    ID_PERSONA='".concat(ID_PERSONA, "',\n    FOT_PERSONA = '").concat(FOT_PERSONA, "',\n    NOM_PERSONA='").concat(NOM_PERSONA, "',\n    APE_PERSONA='").concat(APE_PERSONA, "',\n    SEX_PERSONA='").concat(SEX_PERSONA, "',\n    FEC_NACIMIENTO='").concat(FEC_NACIMIENTO, "'\n    WHERE COD_PERSONA ='").concat(id, "'");
            console.log(Query);
            _context3.prev = 4;
            _context3.next = 7;
            return mysqlConect.query(Query, function (error) {
              if (!error) {
                res.json({
                  message: "Actualizado"
                });
              }
            });

          case 7:
            _context3.next = 13;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](4);
            console.log(_context3.t0);
            next();

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[4, 9]]);
  }));

  return function (_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.DeletePersona = function (req, res, next) {
  var id = req.params.id;
  var query = "DELETE FROM pe_personas WHERE COD_PERSONA = '".concat(id, "'");
  console.log(query);

  try {
    mysqlConect.query(query, function (error) {
      if (!error) {
        res.json("eliminado");
      }
    });
  } catch (error) {
    console.log(error);
    next();
  }
};