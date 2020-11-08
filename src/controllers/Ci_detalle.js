const Mysql = require("../config/database");
exports.Detalles = async (req, res, next) => {


const sql = `SELECT * FROM ci_detalle`;
try{
  
  Mysql.query(sql, (error, row, filds) => {
    res.json(row);});
}catch(erro){
  console.log(erro)
}

};

exports.Detalle = async (req, res, next) => {
   const {id}=req.params;
    
        const sql = `SELECT * FROM ci_detalle WHERE COD_CITA = '${id}' ;`;
    try{
        await  Mysql.query(sql,(error,row,filds)=>{
             res.json(row);
         });

    }catch(error){
        console.log(error)
        next();
    }
};
exports.NewDetalle = async (req, res, next) => {
  const {COD_CITA,COD_SALA,COD_PRODUCTO,CANT_PRODUCTO,IND_DETALLE}=req.body

       const sql = `INSERT INTO ci_detalle(COD_CITA,COD_SALA,COD_PRODUCTO,CANT_PRODUCTO,IND_DETALLE)VALUES('${COD_CITA}','${COD_SALA}','${COD_PRODUCTO}','${CANT_PRODUCTO}','${IND_DETALLE}');`;
    try{
        await  Mysql.query(sql,(error,row,filds)=>{
             res.json({MESSAGE:"GUARDADO"});
         });

    }catch(error){
        console.log(error)
        next();
    }

};
exports.UpDetalle = async (req, res, next) => {
    const {COD_CITA,COD_SALA,COD_PRODUCTO,CANT_PRODUCTO,IND_DETALLE}=req.body;
    const {id}= req.params;

       const sql = `UPDATE ci_detalle SET COD_CITA='${COD_CITA}',COD_SALA='${COD_SALA}',COD_PRODUCTO='${COD_PRODUCTO}',CANT_PRODUCTO='${CANT_PRODUCTO}',IND_DETALLE='${IND_DETALLE}' WHERE COD_DETALLE = '${id}'`;
    try{
        await  Mysql.query(sql,(error,row,filds)=>{
             res.json({MESSAGE:"GUARDADO"});
         });

    }catch(error){
        console.log(error)
        next();
    }

};
exports.DeleteDetalle = async (req, res, next) => {
const{id}=req.params;
const sql= `DELETE FROM ci_detalle WHERE COD_CITA =${id}`;
try{
  await Mysql.query(sql,()=>{
    res.json({MESSAGE:"DETALLES DE LA CITA ELMINADA"})
  })
}catch(erro){
  console.log(error);
  next();
}


};

