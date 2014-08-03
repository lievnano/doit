var express = require('express');
var app = express(),
// var router = require('./router') 

require('./config.js')(app, express);

module.exports = exports = app;