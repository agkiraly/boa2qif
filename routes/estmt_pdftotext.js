var execFileSync = require('child_process').execFileSync;
var estmt_pdftotext = {
  bin: '/usr/bin/pdftotext',
  process: function(opts) {
    //(file,[args][options])  
    console.log(opts);
/*    var args = '-layout ' + opts.filepath + ' ' + opts.destination,
        processed = true;
    console.log('args = ' + args);
        //processed = execFileSync(this.bin, args);
    if (processed) {
      // call the text parsing module
      console.log('parsing text file starts here');
    }
    */
  }
};

module.exports = estmt_pdftotext;
