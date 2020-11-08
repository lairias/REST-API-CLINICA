const Mysql = require("../config/database");
exports.Salas = async (req, res, next) => {

    const sql = `SELECT * FROM sa_sala`;
    Mysql.query(sql, (error, row, filds) => {
      res.json(row);
    });
};
exports.Sala = async (req, res, next) => {};
exports.NewSala = async (req, res, next) => {};
exports.UpSala = async (req, res, next) => {};
exports.DeleteSala = async (req, res, next) => {};
