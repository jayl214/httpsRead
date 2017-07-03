

function getAndPrintHTML (options) {
  var https = require('https');

  var dataStr = '';

  https.get(options, function(response){
    response.setEncoding('utf8');

    response.on( 'data', function(data){
      dataStr += data;
    });

    response.on('end', function(){
      console.log(dataStr);
      console.log('Response stream complete.');
    });
  });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);