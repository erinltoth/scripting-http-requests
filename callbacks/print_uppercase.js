var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {
  var htmlUpper = html.toUpperCase();
  console.log(htmlUpper);

}

getHTML(requestOptions, printUpperCase);
