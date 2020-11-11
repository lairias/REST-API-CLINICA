const Mysql = require("../config/database");
const { encripPas } = require("../lib/Encript.js");
exports.Usuarios = async (req, res, next) => {

    const sql = `SELECT * FROM pe_usuarios`;
    Mysql.query(sql, (error, row, filds) => {
      res.json(row);
    });
};
exports.Usuario = async (req, res, next) => {
  const {id}= req.params;
  const sql = `SELECT * FROM pe_usuarios WHERE COD_USUARIO = '${id}';`
  try{
    Mysql.query(sql,(erro,row,filds)=>{
      res.json(row);
    })
  }catch(error){
    console.log(erro);
    next();
  }
};
exports.NewUsuario = async (req, res, next) => {
  const {COD_PERSONA,NOM_USUARIO,PAS_USUARIO,FEC_CREACION,TIP_USUARIO} = req.body;
  const password = encripPas(PAS_USUARIO)
  const sql = `INSERT INTO pe_usuarios(COD_PERSONA,NOM_USUARIO,PAS_USUARIO,FEC_CREACION,TIP_USUARIO)VALUES('${COD_PERSONA}','${NOM_USUARIO}','${password}','${FEC_CREACION}','${TIP_USUARIO}');`;
  try{
    Mysql.query(sql,()=>{
      res.json({MESSAGE:"CREADO"});
    })
  }catch(error){
    console.log(error);
    next();
  }
};
exports.UpUsuario = async (req, res, next) => {
   const {
     COD_PERSONA,
     NOM_USUARIO,
     PAS_USUARIO,
     FEC_CREACION,
     TIP_USUARIO,
   } = req.body;
   const password = encripPas(PAS_USUARIO);
   const {id}=req.params;
   const sql = `UPDATE  pe_usuarios SET COD_PERSONA= '${COD_PERSONA}',NOM_USUARIO='${NOM_USUARIO}',PAS_USUARIO='${password}',FEC_CREACION='${FEC_CREACION}',TIP_USUARIO='${TIP_USUARIO}' WHERE COD_USUARIO = '${id}';`;
   try {
     Mysql.query(sql, () => {
       res.json({ MESSAGE: "ADTUALIZADO" });
     });
   } catch (error) {
     console.log(error);
     next();
   }
};
exports.DeleteUsuario = async (req, res, next) => {
  const {id}= req.params;
  const sql = `DELETE FROM pe_usuarios WHERE COD_USUARIO ='${id}';`;

  try{
    Mysql.query(sql,()=>{
      res.json({MESSAGE:"ELIMINADO"})
    })
  }catch(error){
    console.log(error);
    next();
  }
};
