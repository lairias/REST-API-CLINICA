

//Importacion de la base de datos
const mysqlConect = require("../config/database.js");

////////////////////////QUERY QUE OBTIENE TODAS LAS PERSONAS
exports.InfoPersonas = async (req, res, next) => {
  try {
    await mysqlConect.query(
      "SELECT * FROM pe_personas",
      (err, rows, fields) => {
        console.log(rows)
        res.send(rows);
      }
    );
  } catch (error) {
    console.log(error);
    next();
  }
};
////////////////////////QUERY QUE OBTINE UNA PERSONA
exports.Infopersona = async (req, res, next) => {
  try {
    const { id } = req.params;
console.log(id);
    await mysqlConect.query(
      "SELECT * FROM `pe_personas` WHERE COD_PERSONA ="+id,
      (err, rows, fields) => {
        res.json(rows);
      }
    );
  } catch (error) {
    console.log(error);
  }
};
////////////////////////QUERY QUE CREA UNA PERSONA
exports.NuevaPersona = (req, res, next) => {
    const  {
     ID_PERSONA,
    FOT_PERSONA,
    NOM_PERSONA,
    APE_PERSONA,
    SEX_PERSONA,
    FEC_NACIMIENTO
  } = req.body;
  console.log(req.body)
const sql = `INSERT INTO pe_personas(ID_PERSONA,FOT_PERSONA,NOM_PERSONA,APE_PERSONA,SEX_PERSONA,FEC_NACIMIENTO) VALUES('${ID_PERSONA}','${FOT_PERSONA}','${NOM_PERSONA}','${APE_PERSONA}','${SEX_PERSONA}','${FEC_NACIMIENTO}')`;


  console.log(sql)
console.log(sql);
  try {
    mysqlConect.query(sql, function (error) {
      if (!error) {
        res.json({
          message: "Persona creada",
        });
      }
    });
  } catch (erro) {
    console.log(erro);
    next();
  }
};
////////////////////////QUERY QUE ACTULIZA UNA PERSONA
exports.UpdatePersona = async (req, res, next) => {
 
  const {
    ID_PERSONA,
    FOT_PERSONA,
    NOM_PERSONA,
    APE_PERSONA,
    SEX_PERSONA,
    FEC_NACIMIENTO,
  } = req.body;
  const { id } = req.params;

  
  const Query = `UPDATE pe_personas SET 
    ID_PERSONA='${ID_PERSONA}',
    FOT_PERSONA = '${FOT_PERSONA}',
    NOM_PERSONA='${NOM_PERSONA}',
    APE_PERSONA='${APE_PERSONA}',
    SEX_PERSONA='${SEX_PERSONA}',
    FEC_NACIMIENTO='${FEC_NACIMIENTO}'
    WHERE COD_PERSONA ='${id}'`;


  console.log(Query);
  try {
    await mysqlConect.query(Query, (error) => {
      if (!error) {
        res.json({
          message: "Actualizado",
        });
      }
    });
  } catch (error) {
    console.log(error);
    next();
  }
};
////////////////////////QUERY QUE ELIMINA UNA PERSONA
exports.DeletePersona = (req, res, next) => {
  const { id } = req.params;
  const query = `DELETE FROM pe_personas WHERE COD_PERSONA = '${id}'`;
  console.log(query);
  try {
    mysqlConect.query(query, (error) => {
      if (!error) {
        res.json("eliminado");
      }
    });
  } catch (error) {
    console.log(error);
    next()
  }
};
