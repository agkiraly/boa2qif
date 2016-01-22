var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multer = require('multer');
//var upload = multer({dest:'./uploads/', fileFilter:function(req, file, cb) {
  //to reject
  //cb(null,false);
  //
  //to accept
//  cb(null,true);
  //
  //You can always pass an error if something goes wrong
  //cb(new Error('I don\'t have a clue!'));
//}

//});

var upload = multer({dest:'./uploads/'});

var routes = require('./routes/index');
var posthandler = require('./routes/posthandler');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/', posthandler);
app.use('/users', users);

// catch 404 and forward to error handler
//app.use(function(req, res, next) {
//  var err = new Error('Not Found');
//  err.status = 404;
//  next(err);
//});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

//app.post('/',upload.single('estmt'), function(req, res, next) {
  //req.file is the 'estmt' file
  //req.body will hold the text fields, if any
//  console.log(req.body);
//  res.status(204).end();
//});
//app.post('/', posthandler);
module.exports = app;
