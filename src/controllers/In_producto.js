const Mysql = require("../config/database");
exports.Productos = async (req, res, next) => {

    const sql = `SELECT * FROM in_producto`;
    Mysql.query(sql, (error, row, filds) => {
      res.json(row);
    });
};
exports.Producto = async (req, res, next) => {
  const sql = `SELECT * FROM in_producto WHERE COD_PRODUCTO = ${id}`;
try{
 await  Mysql.query(sql,(err,row,fild)=>{
    res.json(row);
  });

}catch(error){
  console.log(error);
  next();
}

};
exports.NewProducto = async (req, res, next) => {
  const {COD_PROVEEDOR,COD_DETALLE,COD_ALMACEN,NOM_PRODUCTO,PRE_PRODUCTO,CANT_PRODUCTO,MAR_PRODUCTO,FEC_PRODUCTO,FOT_PRODUCTO}=req.body;
  
  const sql = `INSERT INTO in_producto(COD_PROVEEDOR,COD_DETALLE,COD_ALMACEN,NOM_PRODUCTO,PRE_PRODUCTO,CANT_PRODUCTO,MAR_PRODUCTO,FEC_PRODUCTO,FOT_PRODUCTO)VALUES('${COD_PROVEEDOR}','${COD_DETALLE}','${COD_ALMACEN}','${NOM_PRODUCTO}','${PRE_PRODUCTO}','${CANT_PRODUCTO}','${MAR_PRODUCTO}','${FEC_PRODUCTO}','${FOT_PRODUCTO}')`;
  console.log(sql)
  try{
    Mysql.query(sql,()=>{
      res.json({MESSAGE:"CREADO"});
    })
  }catch(error){
    console.log(error);
    next();
  }
  
};
exports.UpProducto = async (req, res, next) => {
  const {id}= req.params;
    const {COD_PROVEEDOR,COD_DETALLE,COD_ALMACEN,NOM_PRODUCTO,PRE_PRODUCTO,CANT_PRODUCTO,MAR_PRODUCTO,FEC_PRODUCTO,FOT_PRODUCTO}=req.body;
  
  const sql = `UPDATE in_producto SET COD_PROVEEDOR='${COD_PROVEEDOR}',COD_DETALLE='${COD_DETALLE}',COD_ALMACEN='${COD_ALMACEN}',NOM_PRODUCTO='${NOM_PRODUCTO}',PRE_PRODUCTO='${PRE_PRODUCTO}',CANT_PRODUCTO='${CANT_PRODUCTO}',MAR_PRODUCTO='${MAR_PRODUCTO}',FEC_PRODUCTO='${FEC_PRODUCTO}',FOT_PRODUCTO='${FOT_PRODUCTO}' WHERE COD_PRODUCTO = '${id}'`;
  try{
   await Mysql.query(sql,()=>{
      res.json({MESSAGE:"UPDATE"});
    })
  }catch(error){
    console.log(error);
    next();
  }
  
};

exports.DeleteProducto = async (req, res, next) => {
  const {id}= req.params;
  const sql = `DELETE FROM in_producto  WHERE COD_PRODUCTO = '${id}'`;
  try{
   await  Mysql.query(sql,()=>{
      res.json({MESSAGE:"ELIMINADO"});
    })
  }catch(error){
    console.log(error);
    next();
  }
  
};
