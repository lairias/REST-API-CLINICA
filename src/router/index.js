const express = require("express");
const router = express.Router();
/**Importaciones de las controladores */
const {PER_TEL_COR_USU}= require('../controllers/PERSONA_tel_cor_usu');
const {Login} = require('../controllers/Login');
const {Personas,Persona,NewPersona,UpPersona,DeletePersona} = require("../controllers/Pe_personas.js");
const {Telefonos,Telefono,NewTelefono,UpTelefono,DeleteTelefono} = require("../controllers/Pe_telefono.js");
const {Correo,Correos,UpCorreo,NewCorreo,DeleteCorreo}= require('../controllers/Pe_correos')
const {Citas,Cita,NewCita,UpCita,DeleteCita}= require('../controllers/Ci_cita')
const {Detalles, Detalle, NewDetalle, UpDetalle,DeleteDetalle} = require("../controllers/Ci_detalle");
const {Almacenes,Almacen,NewAlmacen, UpAlmacen,DeleteAlmacen} = require('../controllers/In_almacenes');
const {Productos,Producto,NewProducto, UpProducto,DeleteProducto }= require('../controllers/In_producto.js');
const {Proveedores,Proveedor,NewProveedor, UpProveedor,DeleteProveedor}=require('../controllers/In_proveedor');
const {Empleados,Empleado,NewEmpleado, UpEmpleado,DeleteEmpleado}=require('../controllers/Pe_empleados');
const {Medicos,Medico,NewMedico, UpMedico,DeleteMedico}=require('../controllers/Pe_medico');
const {Pacientes,Paciente,NewPaciente, UpPaciente,DeletePaciente}=require('../controllers/Pe_paciente');
const {Usuarios,Usuario,NewUsuario, UpUsuario,DeleteUsuario}=require('../controllers/Pe_usuarios');
const {Salas,Sala,NewSala, UpSala,DeleteSala}=require('../controllers/Sa_sala');
module.exports = function () {
  router.post("/personaTEL", PER_TEL_COR_USU);
 router.post("/login", Login);

router.get("/persona", Personas);
        router.put("/persona/:id", UpPersona);
        router.get("/persona/:id", Persona);
        router.post("/persona", NewPersona);
        router.delete("/persona/:id", DeletePersona);

  router.get("/telefono", Telefonos);
        router.get("/telefono/:id",Telefono);
        router.post("/telefono",NewTelefono);
        router.put("/telefono/:id",UpTelefono);
        router.delete("/telefono/:id",DeleteTelefono);

  router.get('/correo',Correos);
        router.get('/correo/:id',Correo);
        router.post('/correo',NewCorreo);
        router.put('/correo/:id',UpCorreo);
        router.delete('/correo/:id',DeleteCorreo);

  router.get('/cita',Citas);
        router.get('/cita/:id',Cita);
        router.post('/cita',NewCita);
        router.put('/cita/:id',UpCita);
        router.delete('/cita/:id',DeleteCita);

  router.get('/detalle',Detalles);
        router.get('/detalle/:id',Detalle);
        router.post('/detalle',NewDetalle);
        router.put('/detalle/:id',UpDetalle);
        router.delete('/detalle/:id',DeleteDetalle);

  router.get('/almacen',Almacenes);
        router.get('/almacen/:id',Almacen);
        router.post('/almacen',NewAlmacen);
        router.put('/almacen/:id',UpAlmacen);
        router.delete('/almacen/:id',DeleteAlmacen);

  router.get('/producto',Productos);
        router.get('/producto/:id',Producto);
        router.post('/producto',NewProducto);
        router.put('/producto/:id',UpProducto);
        router.delete('/producto/:id',DeleteProducto);
        
  router.get('/proveedor',Proveedores);
        router.get('/proveedor/:id',Proveedor);
        router.post('/proveedor',NewProveedor);
        router.put('/proveedor/:id',UpProveedor);
        router.delete('/proveedor/:id',DeleteProveedor);

  router.get('/empleado',Empleados);
        router.get('/empleado/:id',Empleado);
        router.post('/empleado',NewEmpleado);
        router.put('/empleado/:id',UpEmpleado);
        router.delete('/empleado/:id',DeleteEmpleado);

  router.get('/usuario',Usuarios);
        router.get('/usuario/:id',Usuario);
        router.post('/usuario',NewUsuario);
        router.put('/usuario/:id',UpUsuario);
        router.delete('/usuario/:id',DeleteUsuario);
  router.get('/sala',Salas);
        router.get('/sala/:id',Sala);
        router.post('/sala',NewSala);
        router.put('/sala/:id',UpSala);
        router.delete('/sala/:id',DeleteSala);
  router.get('/medico',Medicos);
        router.get('/medico/:id',Medico);
        router.post('/medico',NewMedico);
        router.put('/medico/:id',UpMedico);
        router.delete('/medico/:id',DeleteMedico);
  router.get('/paciente',Pacientes);
        router.get('/paciente/:id',Paciente);
        router.post('/paciente',NewPaciente);
        router.put('/paciente/:id',UpPaciente);
        router.delete('/paciente/:id',DeletePaciente);
  return router;
};

