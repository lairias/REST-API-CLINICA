const Mysql = require('../config/database')

exports.Citas = async (req, res, next) => {
    
    const sql = `SELECT * FROM ci_cita`
    try{
        await  Mysql.query(sql,(error,row,filds)=>{
             res.json(row);
         });

    }catch(error){
        console.log(error)
        next();
    }
    

};
exports.Cita = async (req, res, next) => {
    const {id}=req.params;
    
        const sql = `SELECT * FROM ci_cita WHERE COD_CITA = '${id}';`;
    try{
        await  Mysql.query(sql,(error,row,filds)=>{
             res.json(row);
         });

    }catch(error){
        console.log(error)
        next();
    }
    

};
exports.NewCita = async (req, res, next) => {
    const {COD_PACIENTE,COD_MEDICO,FEC_CITA,DIA_CITA,HOR_INI_CITA,HOR_FIN_CITA,IND_ESTADO,DES_CITA}=req.body

       const sql = `INSERT INTO ci_cita(COD_PACIENTE,COD_MEDICO,FEC_CITA,DIA_CITA,HOR_INI_CITA,HOR_FIN_CITA,IND_ESTADO,DES_CITA)VALUES('${COD_PACIENTE}','${COD_MEDICO}','${FEC_CITA}','${DIA_CITA}','${HOR_INI_CITA}','${HOR_FIN_CITA}','${IND_ESTADO}','${DES_CITA}');`;
    try{
        await  Mysql.query(sql,(error,row,filds)=>{
             res.json({MESSAGE:"GUARDADO"});
         });

    }catch(error){
        console.log(error)
        next();
    }

};
exports.UpCita = async (req, res, next) => {
     const {COD_PACIENTE,COD_MEDICO,FEC_CITA,DIA_CITA,HOR_INI_CITA,HOR_FIN_CITA,IND_ESTADO,DES_CITA}=req.body

     const {id}=req.params;
    
     const sql = `UPDATE ci_cita SET COD_PACIENTE ='${COD_PACIENTE}',COD_MEDICO='${COD_MEDICO}',FEC_CITA='${FEC_CITA}',DIA_CITA='${DIA_CITA}',HOR_INI_CITA='${HOR_INI_CITA}',HOR_FIN_CITA='${HOR_FIN_CITA}',IND_ESTADO='${IND_ESTADO}',DES_CITA='${DES_CITA}' WHERE COD_CITA = '${id}';`;
     console.log(sql)
    try{
        await  Mysql.query(sql,()=>{
             res.json({MESSAGE:"ACTUALIZADO"});
         });

    }catch(error){
        console.log(error)
        next();
    }
    
};
exports.DeleteCita = async (req, res, next) => {
     const {id}=req.params;
    
        const sql = `DELETE FROM  ci_cita WHERE COD_CITA = '${id}';`;
    try{
        await  Mysql.query(sql,()=>{
             res.json({MESSAGE:"ELIMINADO"});
         });

    }catch(error){
        console.log(error)
        next();
    }
};
