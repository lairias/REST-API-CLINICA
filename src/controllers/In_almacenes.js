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
  const slq= `INSERT INTO in_almacenes(NOM_ALMACEN)VALUES('${NOM_ALMACEN}');`;
  try{

  }catch(error){
    console.log(error);
    next();
  }
};
exports.UpAlmacen = async (req, res, next) => {};
exports.DeleteAlmacen = async(req,res,next)=>{}
