const Mysql = require("../config/database");
exports.Salas = async (req, res, next) => {

    const sql = `SELECT * FROM sa_sala`;
    Mysql.query(sql, (error, row, filds) => {
      res.json(row);
    });
};
exports.Sala = async (req, res, next) => {
  const {id} = req.params;
  const sql = `sELECT * FROM sa_sala WHERE COD_SALA = '${id}';`;
  try{
    Mysql.query(sql,(err,row,fild)=>{
      res.json(row);
    })
  }catch(error){
    console.log(error);
  }
};
exports.NewSala = async (req, res, next) => {
  const {COD_PACIENTE,NUM_SALA,NOM_SALA,COD_CITA}=req.body;
  const sql = `INSERT INTO sa_sala (COD_PACIENTE,NUM_SALA,NOM_SALA,COD_CITA) VALUES('${COD_PACIENTE}','${NUM_SALA}','${NOM_SALA}','${COD_CITA}');`;
  console.log(sql)
  try{
    Mysql.query(sql,(err,row,filds)=>{
      res.json({MESSAGE:"CREADO"})
    })
    
  }catch(error){
    console.log(error);
    next();
  }
};
exports.UpSala = async (req, res, next) => {
  const {id}=req.params;
  const {COD_PACIENTE,NUM_SALA,NOM_SALA,COD_CITA}=req.body;
  const sql = `UPDATE sa_sala SET COD_PACIENTE = '${COD_PACIENTE}',NUM_SALA = '${NUM_SALA}' ,NOM_SALA = '${NOM_SALA}',COD_CITA = '${COD_CITA}' WHERE COD_SALA = '${id}'`;
  console.log(sql)
  try{
    Mysql.query(sql,()=>{
      res.json({MESSAGE:"ACTUALIZADO"});
    })
  }catch(errro){
    console.log(errro);
    next();
  }
};
exports.DeleteSala = async (req, res, next) => {
    const { id } = req.params;
    const sql = `DELETE FROM  sa_sala WHERE COD_SALA = '${id}'`;
    try {
      Mysql.query(sql, () => {
        res.json({ MESSAGE: "ELIMINADO" });
      });
    } catch (errro) {
      console.log(errro);
      next();
    }
};
