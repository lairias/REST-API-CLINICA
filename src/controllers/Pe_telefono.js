const Mysql = require("../config/database.js");
////////////////////////QUERY QUE OBTINE TODOS LOS TELEFONOS
exports.Telefonos = async (req, res, next) => {
  const sql = "SELECT * FROM 'pe_telefono'";
  try {
    await Mysql.query(sql, (error, rows, fils) => {
      res.json(rows);
    });
  } catch (error) {
    console.log(error);
    next();
  }
};
////////////////////////QUERY QUE OBTINE UN TELEFONO
exports.Telefono = async (req, res, next) => {
  const { id } = req.params;
  const slq = `SELECT * FROM 'pe_telefono'  WHERE 'COD_TELEFONO' ='${id}'`;

  try {
    await Mysql.query(slq, (error, rows, fils) => {
      res.json(rows);
    });
  } catch (error) {
    console.log(error);
    next();
  }
};
////////////////////////QUERY QUE CREAR  UN TELEFONO
exports.NuevoTelefono = async (req, res, next) => {
  const sql = "INSERT INTO 'pe_telefono' SET ?";

  const PE_TELEFONO = {
    'NUM_TELEFONO': req.body.NUM_TELEFONO,
    'TIP_TELEFONO': req.body.TIP_TELEFONO,
    'DES_TELEFONO': req.body.DES_TELEFONO,
    'FEC_REGISTRO': req.body.FEC_REGISTRO,
  };
  console.log(PE_TELEFONO);

  try {
    await Mysql.query(sql, PE_TELEFONO, function (error) {
      if (!error) {
        res.json("GUARDADO");
      }
    });
  } catch (error) {
    console.log(error);
    next();
  }
};

////////////////////////QUERY QUE ACTUALIZAR UN TELEFONO
exports.UpdateTelefono = async (req, res, next) => {
  const { id } = req.params;
  const {
    NUM_TELEFONO,
    TIP_TELEFONO,
    DES_TELEFONO,
    FEC_REGISTRO,
  } = req.body;

  const Query = `UPDATE 'pe_telefono' SET 
    'NUM_TELEFONO'='${NUM_TELEFONO}',
    'TIP_TELEFONO'='${TIP_TELEFONO}',
    'DES_TELEFONO' ='${DES_TELEFONO}',
    'FEC_REGISTRO' = '${FEC_REGISTRO}'
    WHERE 'COD_TELEFONO' = '${id}'
    `;
  try {
    await Mysql.query(Query, (error) => {
      if (!error) {
        res.json("Actualizado");
      }
    });
  } catch (error) {
    console.log(error);
    next();
  }
};
////////////////////////QUERY QUE ELIMINAR UN TELEFONO
exports.DeleteTelefono = async (req, res, next) => {
  const { id } = req.params;
  const Query = `
    DELETE FROM 'pe_telefono'  WHERE COD_TELEFONO = ${id}
    `;
  try {
    await Mysql.query(Query, (error) => {
      if (!error) {
        res.json("Eliminado");
      }
    });
  } catch (error) {
    console.log(error);
    next();
  }
};
