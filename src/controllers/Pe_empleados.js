const Mysql = require("../config/database");
exports.Empleados = async (req, res, next) => {

    const sql = `SELECT * FROM pe_empleados`;
   await  Mysql.query(sql, (error, row, filds) => {
      res.json(row);
    });
};
exports.Empleado = async (req, res, next) => {
const {id} =req.params;
const sql = `SELECT * FROM pe_empleados WHERE COD_EMPLEADO = '${id}';`;
try{
  await Mysql.query(sql,(err,row,fild)=>{
    res.json(row);
  })
}catch(erro){
  console.log(erro);
  next();
}

};
exports.NewEmpleado = async (req, res, next) => {
  const {COD_PERSONA,SAL_EMPLEADO,FEC_CONTRATO,EXP_CONTRATO,TIP_EMPLEADO}=req.body;
  const sql = `INSERT INTO pe_empleados (COD_PERSONA,SAL_EMPLEADO,FEC_CONTRATO,EXP_CONTRATO,TIP_EMPLEADO)VALUES('${COD_PERSONA}','${SAL_EMPLEADO}','${FEC_CONTRATO}','${EXP_CONTRATO}','${TIP_EMPLEADO}');`;
  console.log(sql)
  try {
    await Mysql.query(sql,()=>{
      res.json({MESSAGE:"GUARDADO"});
    })
  } catch (error) {
    console.log(error);
    next();
  }
};
exports.UpEmpleado = async (req, res, next) => {
  const {id}= req.params;
  const {COD_PERSONA,SAL_EMPLEADO,FEC_CONTRATO,EXP_CONTRATO,TIP_EMPLEADO}=req.body;
  const sql = `UPDATE pe_empleados SET COD_PERSONA='${COD_PERSONA}',SAL_EMPLEADO='${SAL_EMPLEADO}',FEC_CONTRATO='${FEC_CONTRATO}',EXP_CONTRATO='${EXP_CONTRATO}',TIP_EMPLEADO='${TIP_EMPLEADO}' WHERE COD_EMPLEADO = '${id}'`;
  try{
    await Mysql.query(sql,()=>{
      res.json({MESSAGE:"ACTUALIZADO"});
    })
  }catch(error){
    console.log(error);
    next();
};
}
exports.DeleteEmpleado = async(req,res,next)=>{
  const {id}=req.params;
  const sql = `DELETE FROM pe_empleados WHERE COD_EMPLEADO = '${id}';`;
  try{
    await Mysql.query(sql,()=>{
      res.json({MESSAGE:"ELIMINADO"})
    })

  }catch(error){
    console.log(error);
    next();
  }

};