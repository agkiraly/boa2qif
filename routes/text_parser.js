var fs = require('fs');
var text_parser =  function() {
  
  function process(req, res, opts) {
    var filepath = opts.filepath + '.txt',
        destination = opts.filepath + '.qif'
    ;
    
    if( filepath.length ) {
      fs.readFile( filepath, 'utf8', function(err, data) {
        parse(req, res, err, data, destination);
      });
    }
  }

  function parse(req, res, err, data, destination) {
    if( ! err ) {
      var lines,
          outfile,
          lenLines,
          curLine,
          occurences,
          preppedStr,
          parts,
          i,
          j,
          write
      ;

      write = true;
      outfile = ['!Type:Bank'];
      
      lines = splitNL(data);
      // console.log(lines);
      lines = prepLines(lines); 
      // console.log(lines);
      lenLines = lines.length;
      // return false;
      // console.log(lines.length);
      for (i=0; i<lenLines; i++) {
        // console.log(findFirstDate(lines[i]));
        curLine = lines[i];
        // console.log(curLine);
        if ( findFirstDate(curLine) ) {
          curLine = curLine.replace(/(\d{2}\/\d{2}\/\d{2})/g, '|$1 ');
          curLine = curLine.replace(/\s+/g,' ');
          occurences = curLine.split('|');
          for (j=1; j<occurences.length; j++) {
            // console.log(occurences[j]);
            preppedStr = prepInstance(occurences[j]);
            parts = getParts(preppedStr);
            // console.log(parts);
            outfile.push('D'+parts.D,'T'+parts.T,'P'+parts.P,'^');
          }
        }
      }
      // console.log(outfile);
      if (write) {
        fs.writeFile(destination, outfile.join('\n'), function (err) {
          if (err) {
            throw err;
          }
          // console.log(destination + ' saved!');
          res.download(destination);
          // res.status(200).end(); // for some reason, the download does
          // not initiate when res.end is sent.
          // also need to clean up tmp upload directory
        });
      }
    }
  }

  function reFormatDate(d) {
    var dParts = d.split('/');
    return '20' + trimStr(dParts[2]) + '-' + dParts[0] + '-' + dParts[1] + '|';
  }

  function getParts(str) {
    var parts = {};
    var partsAr = str.split('|');
    parts.D = partsAr[0];
    parts.P = partsAr[1];
    parts.T = partsAr[2].replace(/,+/,'');
    return parts;
  }

  function prepInstance(str) {
    var dateRegExp = /^(\d{2}\/\d{2}\/\d{2})\s?/; 
    str = str.replace(/^\s+|\s+$/g,'');
    str = str.replace(/'/g,'');
    str = str.replace(/\s?(-?)([\d\.,]+)$/,'|$1$2');
    str = str.replace(dateRegExp,reFormatDate);
    return str;
  }

  function trimStr(str) {
    return str.replace(/^\s+|\s+$/g,'');
  }

  function findFirstDate(line) {
    return line.match(/^\s?(\d{2}\/\d{2}\/\d{2})/g);
  }
  
  function splitNL(data) {
    return data.split('\n');
  }
  
  function prepLines(arr) {
    return arr.filter( 
      function(str) { 
        str = trimStr(str); 
        return str.length;
      }
    );
  }

  return {
    process: process
  };
  
};

module.exports = text_parser();
