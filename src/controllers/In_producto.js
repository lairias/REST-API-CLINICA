const Mysql = require("../config/database");
exports.Productos = async (req, res, next) => {

    const sql = `SELECT * FROM in_producto`;
    Mysql.query(sql, (error, row, filds) => {
      res.json(row);
    });
};
exports.Producto = async (req, res, next) => {};
exports.NewProducto = async (req, res, next) => {};
exports.UpProducto = async (req, res, next) => {};
exports.DeleteProducto = async (req, res, next) => {};

