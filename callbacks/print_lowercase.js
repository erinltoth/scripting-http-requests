var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printLowerCase (html) {
  var htmlLower = html.toLowerCase();
  console.log(htmlLower);

}

getHTML(requestOptions, printLowerCase);