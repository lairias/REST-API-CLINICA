"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Mysql = require("../config/database");

exports.Productos = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var sql;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            sql = "SELECT * FROM in_producto";
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

exports.Producto = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var sql;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            sql = "SELECT * FROM in_producto WHERE COD_PRODUCTO = ".concat(id);
            _context2.prev = 1;
            _context2.next = 4;
            return Mysql.query(sql, function (err, row, fild) {
              res.json(row);
            });

          case 4:
            _context2.next = 10;
            break;

          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            next();

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 6]]);
  }));

  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.NewProducto = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var _req$body, COD_PROVEEDOR, COD_DETALLE, COD_ALMACEN, NOM_PRODUCTO, PRE_PRODUCTO, CANT_PRODUCTO, MAR_PRODUCTO, FEC_PRODUCTO, FOT_PRODUCTO, sql;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, COD_PROVEEDOR = _req$body.COD_PROVEEDOR, COD_DETALLE = _req$body.COD_DETALLE, COD_ALMACEN = _req$body.COD_ALMACEN, NOM_PRODUCTO = _req$body.NOM_PRODUCTO, PRE_PRODUCTO = _req$body.PRE_PRODUCTO, CANT_PRODUCTO = _req$body.CANT_PRODUCTO, MAR_PRODUCTO = _req$body.MAR_PRODUCTO, FEC_PRODUCTO = _req$body.FEC_PRODUCTO, FOT_PRODUCTO = _req$body.FOT_PRODUCTO;
            sql = "INSERT INTO in_producto(COD_PROVEEDOR,COD_DETALLE,COD_ALMACEN,NOM_PRODUCTO,PRE_PRODUCTO,CANT_PRODUCTO,MAR_PRODUCTO,FEC_PRODUCTO,FOT_PRODUCTO)VALUES('".concat(COD_PROVEEDOR, "','").concat(COD_DETALLE, "','").concat(COD_ALMACEN, "','").concat(NOM_PRODUCTO, "','").concat(PRE_PRODUCTO, "','").concat(CANT_PRODUCTO, "','").concat(MAR_PRODUCTO, "','").concat(FEC_PRODUCTO, "','").concat(FOT_PRODUCTO, "')");
            console.log(sql);

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

exports.UpProducto = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
    var id, _req$body2, COD_PROVEEDOR, COD_DETALLE, COD_ALMACEN, NOM_PRODUCTO, PRE_PRODUCTO, CANT_PRODUCTO, MAR_PRODUCTO, FEC_PRODUCTO, FOT_PRODUCTO, sql;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, COD_PROVEEDOR = _req$body2.COD_PROVEEDOR, COD_DETALLE = _req$body2.COD_DETALLE, COD_ALMACEN = _req$body2.COD_ALMACEN, NOM_PRODUCTO = _req$body2.NOM_PRODUCTO, PRE_PRODUCTO = _req$body2.PRE_PRODUCTO, CANT_PRODUCTO = _req$body2.CANT_PRODUCTO, MAR_PRODUCTO = _req$body2.MAR_PRODUCTO, FEC_PRODUCTO = _req$body2.FEC_PRODUCTO, FOT_PRODUCTO = _req$body2.FOT_PRODUCTO;
            sql = "UPDATE in_producto SET COD_PROVEEDOR='".concat(COD_PROVEEDOR, "',COD_DETALLE='").concat(COD_DETALLE, "',COD_ALMACEN='").concat(COD_ALMACEN, "',NOM_PRODUCTO='").concat(NOM_PRODUCTO, "',PRE_PRODUCTO='").concat(PRE_PRODUCTO, "',CANT_PRODUCTO='").concat(CANT_PRODUCTO, "',MAR_PRODUCTO='").concat(MAR_PRODUCTO, "',FEC_PRODUCTO='").concat(FEC_PRODUCTO, "',FOT_PRODUCTO='").concat(FOT_PRODUCTO, "' WHERE COD_PRODUCTO = '").concat(id, "'");
            _context4.prev = 3;
            _context4.next = 6;
            return Mysql.query(sql, function () {
              res.json({
                MESSAGE: "UPDATE"
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

exports.DeleteProducto = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res, next) {
    var id, sql;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            sql = "DELETE FROM in_producto  WHERE COD_PRODUCTO = '".concat(id, "'");
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