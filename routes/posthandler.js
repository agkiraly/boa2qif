var express = require('express');
var posthandler = express.Router();
var multer = require('multer');
var path = require('path');
var upload = multer({
  dest:'./uploads/',
  fileFilter: function(req, file, cb) {
    // console.dir(file);

    if (path.extname(file.originalname) !== '.pdf') {
      return cb(new Error('Only pdfs are allowed'));
    }

    cb(null,true);
  }
});

posthandler.post('/',upload.single('estmt'), function(req, res, next) {
  //req.file is the 'estmt' file
  console.dir(req.file);
  //req.body will hold any text fields
  //console.log(req.body);
  res.status(204).end();
});

module.exports = posthandler;

