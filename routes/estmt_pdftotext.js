var config = require('../config/config');
var execFile = require('child_process').execFile;
var text_parser = require('./text_parser');
var estmt_pdftotext = {
  process: function(req, res, opts) {
    var args = ['-layout', opts.filepath, opts.filepath + '.txt'];

    var processed = execFile(config.pdftotext, args, function(error, stdout, stderr) {
      if (error) {
        throw(error);
      }
      text_parser.process(req, res, opts);
    });
  }
};

module.exports = estmt_pdftotext;
