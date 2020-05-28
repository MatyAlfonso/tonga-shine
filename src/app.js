// ************ Require's ************
var createError = require('http-errors');
var cookieParser = require('cookie-parser');
var express = require('express');
var logger = require('morgan');
var path = require('path');



// ************ express() - (don't touch) ************

var app = express();


// ************ Middlewares - (don't touch) ************
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());

// ************ Template Engine - (don't touch) ************

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// ************ WRITE YOUR CODE FROM HERE ************
// ************ Route System require and use() ************

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var aboutRouter = require('./routes/about');
var servicesRouter = require('./routes/services');
var galleryRouter = require('./routes/gallery');
var contactRouter = require('./routes/contact');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/about', aboutRouter);
app.use('/services', servicesRouter);
app.use('/gallery', galleryRouter);
app.use('/contact', contactRouter);


// ************ DON'T TOUCH FROM HERE ************
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

// ************ exports app - dont'touch ************
module.exports = app;
