const Mysql = require("../config/database");
exports.Pacientes = async (req, res, next) => {

    const sql = `SELECT * FROM pe_pacientes`;
    Mysql.query(sql, (error, row, filds) => {
      res.json(row);
    });
};
exports.Paciente = async (req, res, next) => {};
exports.NewPaciente = async (req, res, next) => {};
exports.UpPaciente = async (req, res, next) => {};
exports.DeletePaciente = async (req, res, next) => {};
