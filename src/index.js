//Secciones de las importaciones de las bibliotecas de Node

const express = require('express');//El sevider de express
const morgan = require('morgan');//Peticiones Http
const body_parser = require('body-parser');//Comunicacion de los input
const Router = require('./router')//Archivo de las rutas 
const Parser = require('body-parser')
const session = require('express-session')
const app = express();//Almacenamos el servidor en una variable


//Fin de las secciones de las importaciones


//seccion de los ajustes
app.set('port', process.env.PORT || 3000);//signamos un puerto al servidor
//Fin de los Ajustes


//seccion de los middleware
app.use(morgan('dev'));//usamos morgan para mostar las peticiones Http
app.use(session({
    secret:'secreto',
    resave:true,
    saveUninitialized:true
}))
app.use(Parser.urlencoded({extended:true}));
app.use(body_parser.json())//Le decimos al servidor que trabaje en formato JSON
app.use(body_parser.urlencoded({extended:true}));
//Fin de los middlewares

//Seccion de las router
app.use('/',Router());//Usamos las Rutas que creamos
//fin de los Routers

//seccion de las exportacione
app.listen(app.set('port'),console.log(app.get('port')))//Le decimos al servidor en que puerto nos escuche

