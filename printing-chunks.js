var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

https.get(requestOptions, function(response) {
  var body = '';
  response.setEncoding('utf8');

  response.on('data', function(chunk) {
    body += (chunk + '\n');
    console.log(body);
  });
});

}

getAndPrintHTMLChunks();