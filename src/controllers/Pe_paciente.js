const Mysql = require("../config/database");
exports.Pacientes = async (req, res, next) => {

    const sql = `SELECT * FROM pe_pacientes`;
    Mysql.query(sql, (error, row, filds) => {
      res.json(row);
    });
};
exports.Paciente = async (req, res, next) => {
  const {id}= req.params;
  const {COD_PERSONA}= req.body;
  const sql = `SELECT * FROM pe_pacientes WHERE COD_PACIENTE = '${id}';`;

  try{
    Mysql.query(sql,(erro,row,filds)=>{
      res.json(row);
    })
  }catch(error){
    console.log(errro);
    next();
  }
};
exports.NewPaciente = async (req, res, next) => {
    const { COD_PERSONA } = req.body;
    const sql = `INSERT INTO pe_pacientes(COD_PERSONA)VALUES('${COD_PERSONA}');`;
    console.log(sql);
    try {
      Mysql.query(sql, () => {
        res.json({ MESSAGE: "CREADO" });
      });
    } catch (error) {
      console.log(error);
      next();
    }
  };

exports.UpPaciente = async (req, res, next) => {
    const { COD_PERSONA } = req.body;
    const {id} = req.params;
    const sql = `UPDATE pe_pacientes SET COD_PERSONA='${COD_PERSONA}' WHERE COD_PACIENTE = '${id}'`;
    console.log(sql);
    try {
      Mysql.query(sql,() => {
        res.json({ MESSAGE: "CREADO" });
      });
    } catch (error) {
      console.log(error);
      next();
    }
    
};
exports.DeletePaciente = async (req, res, next) => {
  const {id} = req.params;
  const sql = `DELETE FROM pe_pacientes WHERE COD_PACIENTE = '${id}';`;
  try{
    Mysql.query(sql,()=>{
      res.json({MESSAGE:"ELIMINADO"});
    })

  }catch(error){
    console.log(error);
    next();
  }
};
