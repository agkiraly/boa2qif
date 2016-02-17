//var execFileSync = require('child_process').execFileSync;
var execFile = require('child_process').execFile;
var estmt_pdftotext = {
  bin: '/usr/bin/pdftotext',
  process: function(opts) {
    console.log(opts);
    
    var args = ['-layout', opts.filepath, opts.destination];
    console.log(args);
    //var    processed = execFile(this.bin, args, function(error, stdout, stderr) {
    var    processed = execFile('/usr/bin/pdftotext -layout /home/alan/Projects/node/boa2qif/uploads/63f5d1de7502acf0c03798b8789fb760 /home/alan/Projects/node/boa2qif/uploads/processed/63f5d1de7502acf0c03798b8789fb760.txt', function(error, stdout, stderr) { 
      console.log(arguments);
          if (error) {
//            throw(error);
console.log(error);
          }
          console.log(stdout);
          console.log('text file created');
          console.log('next step: parse the text file');
        });
    
  }
};

module.exports = estmt_pdftotext;
// /usr/bin/pdftotext -layout /home/alan/Projects/node/boa2qif/uploads/63f5d1de7502acf0c03798b8789fb760 /home/alan/Projects/node/boa2qif/uploads/processed/63f5d1de7502acf0c03798b8789fb760.txt 
