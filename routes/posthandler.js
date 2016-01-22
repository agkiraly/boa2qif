var express = require('express');
var posthandler = express.Router();
var multer = require('multer');
var upload = multer({dest:'./uploads/'});

posthandler.post('/',upload.single('estmt'), function(req, res, next) {
  //req.file is the 'estmt' file
  //req.body will hold the text fields, if any
  console.log(req.body);
  res.status(204).end();
});

module.exports = posthandler;
