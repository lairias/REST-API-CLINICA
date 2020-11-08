const Mysql = require("../config/database");
exports.Correos = async(req,res,next)=>{

    const sql = `SELECT * FROM pe_correo`;
    Mysql.query(sql, (error, row, filds) => {
      res.json(row);
    });
}
exports.Correo = async(req,res,next)=>{

}
exports.NewCorreo = async(req,res,next)=>{

}
exports.UpCorreo = async(req,res,next)=>{
  
}
exports.DeleteCorreo = async(req,res,next)=>{
  
}