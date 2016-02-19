var fs = require('fs');
var text_parser =  function() {
  this.process = function(opts) {
    var filepath = opts.filepath,
        destination = opts.destination,
        buf;

    if( filepath.length ) {
      buf = fs.readFile( filepath, 'utf8', this.parse );
    }
  };
  this.parse = function (err,data) {
    if( ! err ) {
      var lines,
          outfile,
          lenLines,
          curLine,
          occurences,
          preppedStr,
          parts,
          i,
          j;

console.log('***********************');
console.dir(this);
console.log('***********************');
lines = this.splitNL(data);
      // console.log(lines);
      lines = this.prepLines(lines); 
      // console.log(lines);
      lenLines = lines.length;
      // return false;
      outfile = ['!Type:Bank'];
      // console.log(lines.length);
      for (i=0; i<lenLines; i++) {
        // console.log(findFirstDate(lines[i]));
        curLine = lines[i];
        // console.log(curLine);
        if ( this.findFirstDate(curLine) ) {
          curLine = curLine.replace(/(\d{2}\/\d{2}\/\d{2})/g, '|$1 ');
          curLine = curLine.replace(/\s+/g,' ');
          occurences = curLine.split('|');
          for (j=1; j<occurences.length; j++) {
            preppedStr = this.prepInstance(ocurrences[j]);
            parts = this.getParts(preppedStr);
            //console.log(parts);
            outfile.push('D'+parts.D,'T'+parts.T,'P'+parts.P,'^');
            // console.log(outfile);
            // return false;
          }
        }
      }
      // console.log(outfile);
      fs.writeFile(destination, outfile.join('\n'), function (err) {
        if (err) {
          throw err;
        }
        console.log(destination + ' saved!');
      });
    }
  };
  this.reFormatDate = function(d) {
    var dParts = d.split('/');
    return '20' + trimStr(dParts[2]) + '-' + dParts[0] + '-' + dParts[1] + '|';
  };
  this.getParts = function(str) {
    var parts = {};
    var partsAr = str.split('|');
    parts.D = partsAr[0];
    parts.P = partsAr[1];
    parts.T = partsAr[2]; // we might need to replace commas here
    return parts;
  };
  this.prepInstance = function(str) {
    var datere = /^(\d{2}\/\d{2}\/\d{2})\s?/; 
    str = str.replace(/^\s+|\s+$/g,'');
    //str = str.replace(/,/g,' ');
    str = str.replace(/'/g,'');
    str = str.replace(/\s?(-?)([\d\.]+)$/,'|$1$2');
    str = str.replace(datere,reFormatDate);
    return str;
  };
  this.trimStr = function(str) {
    return str.replace(/^\s+|\s+$/g,'');
  };
  this.findFirstDate = function(line) {
    // var re = new RegExp (/^s+/ + getDateReg());
    // return line.match(re);
    return line.match(/^\s?(\d{2}\/\d{2}\/\d{2})/g);
  };
  this.splitNL = function(data) {
    return data.split('\n');
  };
  this.prepLines = function(arr) {
    return arr.filter( 
      function(str) { 
        str = trimStr(str); 
        return str.length;
      }
    );
  };
  return this;
};

module.exports = new text_parser();
