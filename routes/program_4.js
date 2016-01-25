var fs = require('fs');

var fpath = '';


//var outFile = '/Users/alan/Documents/node/projects/bsdigest/z_archive/data.qif';
var outFile = 'data.qif';

if( process.argv.length > 2 ) {
 fpath = process.argv[2];
 outFile = process.argv[3];
}

if( fpath.length ) {
 var buf = fs.readFile( fpath, 'utf8', cb );
}

function cb(err,data) {
 if( ! err ) {
  var l = splitNL(data);
  //console.log(l);
  var l = prepLines(l); 
  //console.log(l);
  //return false;
  var qif = ['!Type:Bank'];
//  console.log(l.length);
  for (var i=0; i<l.length; i++) {
//    console.log(findFirstDate(l[i]));
    var curLine = l[i];
    console.log(curLine);
    if ( findFirstDate(curLine) ) {
      var curLine = l[i];
      curLine = curLine.replace(/(\d{2}\/\d{2}\/\d{2})/g, '|$1 ');
      curLine = curLine.replace(/\s+/g,' ');
      var instances = curLine.split('|');
      for (var j=1; j<instances.length; j++) {
        var preppedStr = prepInstance(instances[j]);
        var parts = getParts(preppedStr);
        var finalStr = '';
        console.log(parts);
        qif.push('D'+parts.D);
        qif.push('T'+parts.T);
        qif.push('P'+parts.P);
        qif.push('^');
//        console.log(qif);
//        return false;
        //qif.push(prepInstance(instances[j]));
      }
    } else {
  //    console.log('no date');
    }
  }
  console.log(qif);
  fs.writeFile(outFile, qif.join('\n'), function (err) {
    if (err) throw err;
    console.log('It\'s saved!');
  });
 }
}


//buffer = new Buffer("some content\n");

//fs.open(outFile, 'w', function(err, fd) {
//    if (err) {
//        throw 'error opening file: ' + err;
//    }
//
//    fs.write(fd, buffer, 0, buffer.length, null, function(err) {
//        if (err) throw 'error writing file: ' + err;
//        fs.close(fd, function() {
//            console.log('file written');
//        })
//    });
//});

function reFormatDate(d) {
  var dParts = d.split('/');
  return '20' + trimStr(dParts[2]) + '-' + dParts[0] + '-' + dParts[1] + '|';
}

function getParts(str) {
  var parts = {};
  var partsAr = str.split('|');
  parts.D = partsAr[0];
  parts.P = partsAr[1];
  parts.T = partsAr[2]; // we might need to replace commas here
  return parts;
}

function prepInstance(str) {
  var datere = /^(\d{2}\/\d{2}\/\d{2})\s?/; 
  str = str.replace(/^\s+|\s+$/g,'');
  //str = str.replace(/,/g,' ');
  str = str.replace(/'/g,'');
  str = str.replace(/\s?(-?)([\d\.]+)$/,'|$1$2');
  str = str.replace(datere,reFormatDate);
  return str;
}

function trimStr(str) {
  return str.replace(/^\s+|\s+$/g,'');
}

//function getDateReg() {
//  return /(\d{2}\/\d{2}\/\d{2})/g;
//}
//function getDateReg(pad) {
//  if (pad) {
//    return /^\s+(\d{2}\/\d{2}\/\d{2})/g;
//  } else {
//    return /(\d{2}\/\d{2}\/\d{2})/g;
//  } 
//}

function findFirstDate(line) {
  //var re = new RegExp (/^s+/ + getDateReg());
  //return line.match(re);
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
