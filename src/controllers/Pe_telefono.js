const Mysql = require("../config/database.js");
exports.Telefonos = async (req, res, next) => {
  const sql = "SELECT * FROM pe_telefono";
  try {
    await Mysql.query(sql, (error, rows, fils) => {
      res.json(rows);
    });
  } catch (error) {
    console.log(error);
    next();
  }
};
exports.Telefono = async (req, res, next) => {
  const { id } = req.params;
  const slq = `SELECT * FROM pe_telefono  WHERE COD_TELEFONO ='${id}'`;

  try {
    await Mysql.query(slq, (error, rows, fils) => {
      res.json(rows);
    });
  } catch (error) {
    console.log(error);
    next();
  }
};
exports.NewTelefono = async (req, res, next) => {
  const { NUM_TELEFONO, TIP_TELEFONO, DES_TELEFONO, FEC_REGISTRO } = req.body;
  const sql = `INSERT INTO pe_telefono(NUM_TELEFONO,TIP_TELEFONO,DES_TELEFONO,FEC_REGISTRO)
    VALUES('${NUM_TELEFONO}','${TIP_TELEFONO}','${DES_TELEFONO}','${FEC_REGISTRO}')`;
  console.log(sql);
  try {
    await Mysql.query(sql, function (error) {
      if (!error) {
        res.json("GUARDADO");
      }
    });
  } catch (error) {
    console.log(error);
    next();
  }
};
exports.UpTelefono = async (req, res, next) => {
  const { id } = req.params;
  const { NUM_TELEFONO, TIP_TELEFONO, DES_TELEFONO, FEC_REGISTRO } = req.body;
  const Query = `UPDATE pe_telefono SET 
    NUM_TELEFONO='${NUM_TELEFONO}',
    TIP_TELEFONO='${TIP_TELEFONO}',
     DES_TELEFONO ='${DES_TELEFONO}',
    FEC_REGISTRO = '${FEC_REGISTRO}'
    WHERE 'COD_TELEFONO' = '${id}'
    `;

  console.log(Query);
  console.log(id);
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
exports.DeleteTelefono = async (req, res, next) => {
  const { id } = req.params;
  const Query = `
    DELETE FROM pe_telefono  WHERE COD_TELEFONO = '${id}'
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
