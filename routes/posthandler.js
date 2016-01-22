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

