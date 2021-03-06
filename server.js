var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override');
var session = require('express-session');
var passport = require('passport');
var nodemailer = require('nodemailer')

require('dotenv').config();
require('./config/database');
require('./config/passport');

// Share My Storage App Routers

const indexRouter = require('./routes/index');
const storageRouter = require('./routes/storages');
const userRouter = require('./routes/users');
const contactRouter = require('./routes/forms');
const adminRouter = require('./routes/admins');
const reviewsRouter = require('./routes/reviews');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(session({
  secret: 'Storage Mates!',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next){
  res.locals.user = req.user;
  next();
})

// Share My Storage App Use Definitions


app.use('/', indexRouter);
app.use('/storages', storageRouter);
app.use('/users', userRouter);
app.use('/forms', contactRouter);
app.use('/admins', adminRouter);
app.use('/', reviewsRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
