"use strict";

var express = require("express");

var router = express.Router();
/**Importaciones de las controladores */

var _require = require('../controllers/PERSONA_tel_cor_usu'),
    PER_TEL_COR_USU = _require.PER_TEL_COR_USU;

var _require2 = require('../controllers/Login'),
    Login = _require2.Login;

var _require3 = require("../controllers/Pe_personas.js"),
    Personas = _require3.Personas,
    Persona = _require3.Persona,
    NewPersona = _require3.NewPersona,
    UpPersona = _require3.UpPersona,
    DeletePersona = _require3.DeletePersona;

var _require4 = require("../controllers/Pe_telefono.js"),
    Telefonos = _require4.Telefonos,
    Telefono = _require4.Telefono,
    NewTelefono = _require4.NewTelefono,
    UpTelefono = _require4.UpTelefono,
    DeleteTelefono = _require4.DeleteTelefono;

var _require5 = require('../controllers/Pe_correos'),
    Correo = _require5.Correo,
    Correos = _require5.Correos,
    UpCorreo = _require5.UpCorreo,
    NewCorreo = _require5.NewCorreo,
    DeleteCorreo = _require5.DeleteCorreo;

var _require6 = require('../controllers/Ci_cita'),
    Citas = _require6.Citas,
    Cita = _require6.Cita,
    NewCita = _require6.NewCita,
    UpCita = _require6.UpCita,
    DeleteCita = _require6.DeleteCita;

var _require7 = require("../controllers/Ci_detalle"),
    Detalles = _require7.Detalles,
    Detalle = _require7.Detalle,
    NewDetalle = _require7.NewDetalle,
    UpDetalle = _require7.UpDetalle,
    DeleteDetalle = _require7.DeleteDetalle;

var _require8 = require('../controllers/In_almacenes'),
    Almacenes = _require8.Almacenes,
    Almacen = _require8.Almacen,
    NewAlmacen = _require8.NewAlmacen,
    UpAlmacen = _require8.UpAlmacen,
    DeleteAlmacen = _require8.DeleteAlmacen;

var _require9 = require('../controllers/In_producto.js'),
    Productos = _require9.Productos,
    Producto = _require9.Producto,
    NewProducto = _require9.NewProducto,
    UpProducto = _require9.UpProducto,
    DeleteProducto = _require9.DeleteProducto;

var _require10 = require('../controllers/In_proveedor'),
    Proveedores = _require10.Proveedores,
    Proveedor = _require10.Proveedor,
    NewProveedor = _require10.NewProveedor,
    UpProveedor = _require10.UpProveedor,
    DeleteProveedor = _require10.DeleteProveedor;

var _require11 = require('../controllers/Pe_empleados'),
    Empleados = _require11.Empleados,
    Empleado = _require11.Empleado,
    NewEmpleado = _require11.NewEmpleado,
    UpEmpleado = _require11.UpEmpleado,
    DeleteEmpleado = _require11.DeleteEmpleado;

var _require12 = require('../controllers/Pe_medico'),
    Medicos = _require12.Medicos,
    Medico = _require12.Medico,
    NewMedico = _require12.NewMedico,
    UpMedico = _require12.UpMedico,
    DeleteMedico = _require12.DeleteMedico;

var _require13 = require('../controllers/Pe_paciente'),
    Pacientes = _require13.Pacientes,
    Paciente = _require13.Paciente,
    NewPaciente = _require13.NewPaciente,
    UpPaciente = _require13.UpPaciente,
    DeletePaciente = _require13.DeletePaciente;

var _require14 = require('../controllers/Pe_usuarios'),
    Usuarios = _require14.Usuarios,
    Usuario = _require14.Usuario,
    NewUsuario = _require14.NewUsuario,
    UpUsuario = _require14.UpUsuario,
    DeleteUsuario = _require14.DeleteUsuario;

var _require15 = require('../controllers/Sa_sala'),
    Salas = _require15.Salas,
    Sala = _require15.Sala,
    NewSala = _require15.NewSala,
    UpSala = _require15.UpSala,
    DeleteSala = _require15.DeleteSala;

module.exports = function () {
  router.post("/personaTEL", PER_TEL_COR_USU);
  router.post("/login", Login);
  router.get("/persona", Personas);
  router.put("/persona/:id", UpPersona);
  router.get("/persona/:id", Persona);
  router.post("/persona", NewPersona);
  router["delete"]("/persona/:id", DeletePersona);
  router.get("/telefono", Telefonos);
  router.get("/telefono/:id", Telefono);
  router.post("/telefono", NewTelefono);
  router.put("/telefono/:id", UpTelefono);
  router["delete"]("/telefono/:id", DeleteTelefono);
  router.get('/correo', Correos);
  router.get('/correo/:id', Correo);
  router.post('/correo', NewCorreo);
  router.put('/correo/:id', UpCorreo);
  router["delete"]('/correo/:id', DeleteCorreo);
  router.get('/cita', Citas);
  router.get('/cita/:id', Cita);
  router.post('/cita', NewCita);
  router.put('/cita/:id', UpCita);
  router["delete"]('/cita/:id', DeleteCita);
  router.get('/detalle', Detalles);
  router.get('/detalle/:id', Detalle);
  router.post('/detalle', NewDetalle);
  router.put('/detalle/:id', UpDetalle);
  router["delete"]('/detalle/:id', DeleteDetalle);
  router.get('/almacen', Almacenes);
  router.get('/almacen/:id', Almacen);
  router.post('/almacen', NewAlmacen);
  router.put('/almacen/:id', UpAlmacen);
  router["delete"]('/almacen/:id', DeleteAlmacen);
  router.get('/producto', Productos);
  router.get('/producto/:id', Producto);
  router.post('/producto', NewProducto);
  router.put('/producto/:id', UpProducto);
  router["delete"]('/producto/:id', DeleteProducto);
  router.get('/proveedor', Proveedores);
  router.get('/proveedor/:id', Proveedor);
  router.post('/proveedor', NewProveedor);
  router.put('/proveedor/:id', UpProveedor);
  router["delete"]('/proveedor/:id', DeleteProveedor);
  router.get('/empleado', Empleados);
  router.get('/empleado/:id', Empleado);
  router.post('/empleado', NewEmpleado);
  router.put('/empleado/:id', UpEmpleado);
  router["delete"]('/empleado/:id', DeleteEmpleado);
  router.get('/usuario', Usuarios);
  router.get('/usuario/:id', Usuario);
  router.post('/usuario', NewUsuario);
  router.put('/usuario/:id', UpUsuario);
  router["delete"]('/usuario/:id', DeleteUsuario);
  router.get('/sala', Salas);
  router.get('/sala/:id', Sala);
  router.post('/sala', NewSala);
  router.put('/sala/:id', UpSala);
  router["delete"]('/sala/:id', DeleteSala);
  router.get('/medico', Medicos);
  router.get('/medico/:id', Medico);
  router.post('/medico', NewMedico);
  router.put('/medico/:id', UpMedico);
  router["delete"]('/medico/:id', DeleteMedico);
  router.get('/paciente', Pacientes);
  router.get('/paciente/:id', Paciente);
  router.post('/paciente', NewPaciente);
  router.put('/paciente/:id', UpPaciente);
  router["delete"]('/paciente/:id', DeletePaciente);
  return router;
};