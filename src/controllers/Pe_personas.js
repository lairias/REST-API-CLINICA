//Importacion de la base de datos
const { query } = require("express");
const mysqlConect = require("../config/database.js");

////////////////////////QUERY QUE OBTIENE TODAS LAS PERSONAS
exports.InfoPersonas = async (req, res, next) => {
  try {
    await mysqlConect.query(
      "SELECT * from PE_PERSONAS",
      (err, rows, fields) => {
        res.json(rows);
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
    await mysqlConect.query(
      "SELECT * FROM PE_PERSONAS WHERE COD_PERSONA = ?",
      [id],
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
  const sql = "INSERT INTO PE_PERSONAS SET ?";
  const Pe_personas = {
    ID_PERSONA: req.body.ID_PERSONA,
    NOM_PERSONA: req.body.NOM_PERSONA,
    APE_PERSONA: req.body.APE_PERSONA,
    SEX_PERSONA: req.body.SEX_PERSONA,
    FEC_NACIMIENTO: req.body.FEC_NACIMIENTO,
    EST_CIVIL: req.body.EST_CIVIL
  };
  try {
    mysqlConect.query(sql, Pe_personas, function (error) {
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
  const { id } = req.params;

  const Query = `UPDATE PE_PERSONAS SET 
    ID_PERSONA='${req.body.ID_PERSONA}',
    NOM_PERSONA='${req.body.NOM_PERSONA}',
    APE_PERSONA='${req.body.APE_PERSONA}',
    SEX_PERSONA='${req.body.SEX_PERSONA}',
    FEC_NACIMIENTO='${req.body.FEC_NACIMIENTO}',
    EST_CIVIL='${req.body.EST_CIVIL}'
    WHERE COD_PERSONA =${id}`;

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
  const query = `DELETE FROM PE_PERSONAS WHERE COD_PERSONA = ${id}`;
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
