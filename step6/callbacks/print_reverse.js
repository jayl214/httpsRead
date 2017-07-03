
var getHTML = require('../../step5/http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printRev (html) {
  var htmlRev = '';
  for ( i = html.length -1; i >= 0; i-- ){
    htmlRev += html[i];
  }
  console.log(htmlRev);
}

getHTML(requestOptions, printRev);
