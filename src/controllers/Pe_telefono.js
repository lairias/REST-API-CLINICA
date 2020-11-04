const Mysql = require("../config/database.js");
////////////////////////QUERY QUE OBTINE TODOS LOS TELEFONOS
exports.Telefonos = async (req, res, next) => {
  const sql = "SELECT * FROM PE_TELEFONO";
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
  const slq = `SELECT * FROM PE_TELEFONO WHERE COD_TELEFONO = ?`;

  try {
    await Mysql.query(slq, [id], (error, rows, fils) => {
      res.json(rows);
    });
  } catch (error) {
    console.log(error);
    next();
  }
};
////////////////////////QUERY QUE CREAR  UN TELEFONO
exports.NuevoTelefono = async (req, res, next) => {
  const sql = "INSERT INTO PE_TELEFONO SET ?";

  const PE_TELEFONO = {
    NUM_TELEFONO: req.body.NUM_TELEFONO,
    TIP_TELEFONO: req.body.TIP_TELEFONO,
    DES_TELEFONO: req.body.DES_TELEFONO,
    FEC_REGISTRO: req.body.FEC_REGISTRO,
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

  const Query = `UPDATE PE_TELEFONO SET 
    NUM_TELEFONO='${NUM_TELEFONO}',
    TIP_TELEFONO='${TIP_TELEFONO}',
    DES_TELEFONO ='${DES_TELEFONO}',
    FEC_REGISTRO = '${FEC_REGISTRO}'
    WHERE COD_TELEFONO = '${id}'
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
    DELETE FROM PE_TELEFONO WHERE COD_TELEFONO = ${id}
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
