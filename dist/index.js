"use strict";

require('@babel/polyfill');

var express = require('express');

var morgan = require('morgan');

var body_parser = require('body-parser');

var Router = require('./router');

var Parser = require('body-parser');

var cors = require('cors');

var app = express();
app.set('port', process.env.PORT || 5000);
app.use(cors());
app.use(morgan('dev'));
app.use(Parser.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(body_parser.urlencoded({
  extended: true
}));
app.use('/', Router());
app.listen(app.set('port'), console.log(app.get('port')));