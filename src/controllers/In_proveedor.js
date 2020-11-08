const Mysql = require("../config/database");
exports.Proveedores = async (req, res, next) => {

    const sql = `SELECT * FROM in_proveedor`;
    Mysql.query(sql, (error, row, filds) => {
      res.json(row);
    });
};
exports.Proveedor = async (req, res, next) => {};
exports.NewProveedor = async (req, res, next) => {};
exports.UpProveedor = async (req, res, next) => {};
exports.DeleteProveedor = async (req, res, next) => {};
