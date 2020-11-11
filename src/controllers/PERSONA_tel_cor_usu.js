const Mysql = require("../config/database");
const { encripPas } = require("../lib/Encript.js"); 
exports.PER_TEL_COR_USU = (req, res, next) => {
  const {ID_PERSONA,FOT_PERSONA,NOM_PERSONA,APE_PERSONA,SEX_PERSONA,FEC_NACIMIENTO,NUM_TELEFONO,TIP_TELEFONO,DES_TELEFONO,FEC_REGISTRO,DES_CORREO,
DOM_CORREO,NOM_USUARIO,PAS_USUARIO,FEC_CREACION,TIP_USUARIO,} = req.body;const password = encripPas(PAS_USUARIO); const sql = `CALL INS_PERSONA_TE_CORR('${ID_PERSONA}', '${FOT_PERSONA}', '${NOM_PERSONA}', '${APE_PERSONA}',  '${SEX_PERSONA}',     '${FEC_NACIMIENTO}',  '${NUM_TELEFONO}',  '${TIP_TELEFONO}','${DES_TELEFONO}', '${FEC_REGISTRO}', '${DES_CORREO}', '${DOM_CORREO}',  '${NOM_USUARIO}', '${password}','${FEC_CREACION}','${TIP_USUARIO}');`;try {
    Mysql.query(`select * from pe_usuarios  WHERE NOM_USUARIO = '${NOM_USUARIO}'`,
(err, row, fledns) => {if (JSON.stringify(row).length === 2) {Mysql.query(sql, function (error) {if (!error) {res.json({message: true,});}});} else {res.json({message: false,});}});} catch (erro) {console.log(erro);next();}};
