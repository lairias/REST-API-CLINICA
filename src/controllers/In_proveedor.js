const Mysql = require("../config/database");
exports.Proveedores = async (req, res, next) => {

    const sql = `SELECT * FROM in_proveedor`;
  try{
    await  Mysql.query(sql, (error, row, filds) => {
      res.json(row);
    });
    
  }catch(error){
    console.log(error);
    next();
  }
};
exports.Proveedor = async (req, res, next) => {
  const {id}= req.params;
  const sql = `SELECT * FROM in_proveedor WHERE COD_PROVEEDOR ='${id}'`;
  try{
    await Mysql.query(sql,(err,row,fild)=>{
      res.json(row);
    });
  }catch(error){
    console.log(error);
    next();
  }
};
exports.NewProveedor = async (req, res, next) => {
  const {COD_PERSONA,EMP_PROVEEDOR}=req.body;
  const sql = `INSERT INTO in_proveedor(COD_PERSONA,EMP_PROVEEDOR)VALUES('${COD_PERSONA}','${EMP_PROVEEDOR}');`;
  try{
    await Mysql.query(sql,()=>{
      res.json({
        MESSAGE:"Creado"
      })
    })

  }catch(error){
    console.lof(error)
    next();
  }

};
exports.UpProveedor = async (req, res, next) => {
  const {id}= req.params;
   const { COD_PERSONA, EMP_PROVEEDOR } = req.body;
   const sql = `UPDATE in_proveedor SET COD_PERSONA='${COD_PERSONA}',EMP_PROVEEDOR='${EMP_PROVEEDOR}' WHERE COD_PROVEEDOR = '${id}' `;
   try {
     await Mysql.query(sql, () => {
       res.json({
         MESSAGE: "ACTUALIZADO",
       });
     });
   } catch (error) {
     console.lof(error);
     next();
   }

};
exports.DeleteProveedor = async (req, res, next) => {
const {id}= req.params;
const sql = `DELETE FROM in_proveedor WHERE COD_PROVEEDOR = '${id}'`;

try{
  await Mysql.query(sql,()=>{
    res.json({MESSAGE:"ELIMINADO"})
  })
}
catch(erro){
  console.log(erro)
}


};
