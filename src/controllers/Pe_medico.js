const Mysql = require("../config/database");
exports.Medicos = async (req, res, next) => {

    const sql = `SELECT * FROM pe_medico`;
    Mysql.query(sql, (error, row, filds) => {
      res.json(row);
    });
};
exports.Medico = async (req, res, next) => {
  const {id} = req.params;
  const sql = `SELECT * FROM pe_medico WHERE COD_MEDICO = '${id}';`;
  try{
    await Mysql.query(sql,(err,row,filds)=>{
      res.json(row)
    })
  }catch(error){
    console.log(error);
    next();
  }
};
exports.NewMedico = async (req, res, next) => {
  const {COD_EMPLEADO,EXP_MEDICO}= req.body;
  const sql = `INSERT INTO pe_medico(COD_EMPLEADO,EXP_MEDICO)VALUES('${COD_EMPLEADO}','${EXP_MEDICO}')`;

  try{
    Mysql.query(sql,()=>{
      res.json({MESSAGE:"GUARDADO"});
    })
  }catch(error){
    console.log(error);
    next();
  }
};
exports.UpMedico = async (req, res, next) => {
  const {id}=req.params;
  const {COD_EMPLEADO,EXP_MEDICO}=req.body;
  const sql = `UPDATE pe_medico SET COD_EMPLEADO = '${COD_EMPLEADO}', EXP_MEDICO = '${EXP_MEDICO}'`;

  try{
    Mysql.query(sql,()=>{
      res.json({MESSAGE:"ACTUALIZADO"});
    })
  }catch(error){
    console.log(error);
    next();
  }

};
exports.DeleteMedico = async (req, res, next) => {
  const {id} = req.params;
  const sql = `DELETE FROM pe_medico WHERE COD_MEDICO = '${id}';`;
  try{
    Mysql.query(sql,()=>{
      res.json({MESSAGE:"ELIMINADO"})
    })
  }catch(error){
    console.log(error)
  }
};
