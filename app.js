var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db = require("./config/mongoose");
var indexRouter = require('./routes/');
const passport = require("passport");
const passportLocal = require("./config/passport-local-strategy");
const session = require("express-session");
const MongoStore = require('connect-mongo');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.json());
app.use(session({
    secret: 'medicosSecret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        expires: new Date(Date.now() + 3600000),
        maxAge: 3600000
    },
    store: MongoStore.create({
        mongoUrl: 'mongodb://localhost:27017/medicos',
        autoRemove: 'disabled'
    }, function (err) {
        console.log(err || 'connect-mongo success ok')
    })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
app.use('/', indexRouter);


module.exports = app;
