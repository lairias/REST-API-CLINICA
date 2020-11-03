



///REGISRO 
var bcrypt = require("bcryptjs");

exports.encripPas =  (PAS_USUARIO) => {
  var salt =  bcrypt.genSaltSync(10);
  var hash =  bcrypt.hashSync(PAS_USUARIO, salt);
  return hash;
};


exports.MachCrip =  (PAS_USER, HAS) => {
  const macht = bcrypt.compareSync(PAS_USER, HAS);
  return macht;
};






// //LOGIN
// helpers.matchPassword = async(PAS_USUARIO,SavePasword)=>{
    
//     try{
//         await  bcrypt.compare(PAS_USUARIO,SavePasword)

//     }catch(erro){
//         console.log(erro)
//     }
        
    
// }
