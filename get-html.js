var https = require('https');

function getHTML (options, callback) {

var requestOptions = {
    host: options.host,
    path: options.path
  };
  var html = '';
  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(chunk) {
      html += chunk;
    });
    response.on('end', function() {
      callback(html);
    });
  });

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);