module.exports = function getHTML (options, callback) {

  var https = require('https');

  var dataStr = '';

  https.get(options, function(response){
    response.setEncoding('utf8');

    response.on( 'data', function(data){
      dataStr += data;
    });

    response.on( 'end', function(){
      callback(dataStr);
    });

  });

};