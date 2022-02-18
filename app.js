var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db = require("./config/mongoose");
const passport = require("passport");
const passportJWT = require("./config/passport-jwt");
const cors = require("cors")

var indexRouter = require('./routes/');

var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.json());
app.use(passport.initialize());
app.use('/', indexRouter);


module.exports = app;
