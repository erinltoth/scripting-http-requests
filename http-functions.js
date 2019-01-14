module.exports = function getHTML (options, callback) {
  var https = require('https');
  // var requestOptions = {
  //   host: options.host,
  //   path: options.path
  // };
  var html = '';
  https.get(options, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(chunk) {
      html += chunk;
    });
    response.on('end', function() {
      callback(html);
      console.log('This is the end?');
    });
  });
};

// var requestOptions = {
//   host: 'sytantris.github.io',
//   path: '/http-examples/step5.html'
// };

// module.exports = function printHTML (html) {
//   console.log(html);
// };

// getHTML(requestOptions, printHTML);