const Mysql = require("../config/database");
exports.Usuarios = async (req, res, next) => {

    const sql = `SELECT * FROM pe_usuarios`;
    Mysql.query(sql, (error, row, filds) => {
      res.json(row);
    });
};
exports.Usuario = async (req, res, next) => {};
exports.NewUsuario = async (req, res, next) => {};
exports.UpUsuario = async (req, res, next) => {};
exports.DeleteUsuario = async (req, res, next) => {};
