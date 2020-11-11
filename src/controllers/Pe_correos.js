const Mysql = require("../config/database");
exports.Correos = async(req,res,next)=>{

    const sql = `SELECT * FROM pe_correo`;
    Mysql.query(sql, (error, row, filds) => {
      res.json(row);
    });
}
exports.Correo = async(req,res,next)=>{
  const {id}=req.params;
  const sql = `SELECT * FROM pe_correo WHERE COD_CORREO = '${id}'`;
  try{
    await Mysql.query(sql,(erro,row,fild)=>{
      res.json(row);
    })
  }catch(error){
    console.log(error);
    next();
  }
}
exports.NewCorreo = async(req,res,next)=>{
  const {DES_CORREO}=req.body;
  const sql = `INSERT INTO pe_correo(DES_CORREO)VALUES('${DES_CORREO}')`;
  try{
    await Mysql.query(sql,()=>{
      res.json({MESSAGE:"GUARDADO"})
    })
  }catch(error){
    console.log(error);
    next();
  }

}
exports.UpCorreo = async(req,res,next)=>{
  const {id}= req.params;
  const sql = `UPDATE pe_correo SET DES_CORREO = '${DES_CORREO}' WHERE COD_CORREO = '${id}';`;
  try{
    Mysql.query(sql,()=>{
      res.json({MESSAGE:"ACTUALIZADO"});
    })
  }catch(error){
    console.log(error);
    next();
  }
  
}
exports.DeleteCorreo = async(req,res,next)=>{
  const{id}=req.params;
  const sql = `DELETE FROM pe_correo WHERE COD_CORREO = '${id}';`;

  try{
    await Mysql.query(sql,()=>{
      res.json({
        MESSAGE:"ELIMINADO"
      });
    });
  }catch(error){
    console.log(error);
    next();
  }
  
}