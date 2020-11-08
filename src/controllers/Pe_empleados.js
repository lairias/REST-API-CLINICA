const Mysql = require("../config/database");
exports.Empleados = async (req, res, next) => {

    const sql = `SELECT * FROM pe_empleados`;
    Mysql.query(sql, (error, row, filds) => {
      res.json(row);
    });
};
exports.Empleado = async (req, res, next) => {};
exports.NewEmpleado = async (req, res, next) => {};
exports.UpEmpleado = async (req, res, next) => {};
exports.DeleteEmpleado = async(req,res,next)=>{};