//seccion de las importaciones
const Mysql = require("../config/database");

const { encripPas } = require("../lib/Encript.js"); //metodo de encriptar la contrase;a
//fin de las importaciones

//Creamos controllers de las personas con telfono correo y usuario
exports.PER_TEL_COR_USU = (req, res, next) =>
{
    const {
        ID_PERSONA,
        FOT_PERSONA,
        NOM_PERSONA,
        APE_PERSONA,
        SEX_PERSONA,
        FEC_NACIMIENTO,
        NUM_TELEFONO,
        TIP_TELEFONO,
        DES_TELEFONO,
        FEC_REGISTRO,
        DES_CORREO,
        DOM_CORREO,
        NOM_USUARIO,
        PAS_USUARIO,
        FEC_CREACION,
        TIP_USUARIO,
    } = req.body;

    const password = encripPas(PAS_USUARIO); //encritamos la contrase;a

    //Creamos la sentencia del Query
    const sql = `CALL INS_PERSONA_TE_CORR(
'${ID_PERSONA}', 
'${FOT_PERSONA}', 
'${NOM_PERSONA}', 
'${APE_PERSONA}',  
'${SEX_PERSONA}',     
'${FEC_NACIMIENTO}',  
'${NUM_TELEFONO}',  
'${TIP_TELEFONO}',  
'${DES_TELEFONO}', 
'${FEC_REGISTRO}', 
'${DES_CORREO}', 
'${DOM_CORREO}',  
'${NOM_USUARIO}', 
'${password}',
'${FEC_CREACION}',
'${TIP_USUARIO}'
  );`;

    //Creamos un TRY CATCH para potejer la conexion de error de la base de datos
    try
    {
        Mysql.query(
            "select * from PE_USUARIOS WHERE NOM_USUARIO = ?",
            [NOM_USUARIO],
            (err, row, fledns) =>
            {
                if (JSON.stringify(row).length === 2)
                {
                    Mysql.query(sql, function (error)
                    {
                        if (!error)
                        {
                            res.json({
                                message: true,
                            });
                        }
                    });
                } else
                {
                    res.json({
                        message: false,
                    });
                }
            }
        );
    } catch (erro)
    {
        console.log(erro);
        next();
    }
};
