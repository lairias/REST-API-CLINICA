const Mysql = require("../config/database");
exports.Almacenes = async (req, res, next) => {
    const sql = `SELECT * FROM in_almacenes`;
  await  Mysql.query(sql, (error, row, filds) => {
      res.json(row);
    });
};
exports.Almacen = async (req, res, next) => {
const {id}=req.params;
const sql = `SELECT * FROM in_almacenes WHERE COD_ALMACEN = '${id}'`;

try{
  await Mysql.query(sql,(erro,row)=>{
    res.json(row);
  })
}catch(error){
  console.log(error)
  next();
}
};
exports.NewAlmacen = async (req, res, next) => {
  const {NOM_ALMACEN}= req.body;
  const sql = `INSERT INTO in_almacenes(NOM_ALMACEN)VALUES('${NOM_ALMACEN}');`;
  try{
    await Mysql.query(sql,()=>{
      res.json(
        {
          MESSAGE:"CREADO"
        }
      )
      
    })
  }catch(error){
    console.log(error);
    next();
  }
};
exports.UpAlmacen = async (req, res, next) => {
  const {id}= req.params;
  const {NOM_ALMACEN}=req.body
  const sql = `UPDATE in_almacenes SET NOM_ALMACEN = '${NOM_ALMACEN}' WHERE COD_ALMACEN ='${id}'`;
  
  try{
 await   Mysql.query(sql,()=>{
      res.json({MESSAGE:"ALTUALIZADO"});
    })

  }catch(error){
    console.log(error);
    next();
  }
};
exports.DeleteAlmacen = async(req,res,next)=>{
    const {id}= req.params;
  const sql = `DELETE FROM  in_almacenes WHERE COD_ALMACEN =${id}`;
  try{
 await   Mysql.query(sql,()=>{
      res.json({MESSAGE:"ELIMINADO"});
    })

  }catch(error){
    console.log(error);
    next();
  }
}
