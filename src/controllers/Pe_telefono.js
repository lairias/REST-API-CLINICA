const Mysql = require('../config/database.js')



////////////////////////QUERY QUE OBTINE TODOS LOS TELEFONOS 
exports.Telefonos= async (req,res,next)=>{

    const sql = 'SELECT * FROM PE_TELEFONO';
    try{
        await  Mysql.query(sql, (error, rows, fils)=>{
             res.json(rows)
         })
        
    }catch(error){
        console.log(error)
    }
}

////////////////////////QUERY QUE OBTINE UN TELEFONO
exports.Telefono = async (req,res, next)=>{

    const {id} = req.params;
    const slq = `SELECT * FROM PE_TELEFONO WHERE COD_TELEFONO = ?`;
  
    try{
         Mysql.query(slq,[id],(error,rows,fils)=>{
            res.json(rows)
        } )
    }catch(error){
        console.log(error)
    }
    
}


