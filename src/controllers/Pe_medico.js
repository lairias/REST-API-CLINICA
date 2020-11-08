const Mysql = require("../config/database");
exports.Medicos = async (req, res, next) => {

    const sql = `SELECT * FROM pe_medico`;
    Mysql.query(sql, (error, row, filds) => {
      res.json(row);
    });
};
exports.Medico = async (req, res, next) => {};
exports.NewMedico = async (req, res, next) => {};
exports.UpMedico = async (req, res, next) => {};
exports.DeleteMedico = async (req, res, next) => {};
