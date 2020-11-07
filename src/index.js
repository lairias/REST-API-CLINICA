require('@babel/polyfill')
const express = require('express');
const morgan = require('morgan');
const body_parser = require('body-parser');
const Router = require('./router');
const Parser = require('body-parser');const cors = require('cors');
const app = express();
app.set('port', process.env.PORT || 5000);
app.use(cors());
app.use(morgan('dev'));
app.use(Parser.urlencoded({extended:true}));
app.use(express.json());
app.use(body_parser.urlencoded({extended:true}));
app.use('/',Router());
app.listen(app.set('port'),console.log(app.get('port')));

