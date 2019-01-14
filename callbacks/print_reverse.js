var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printReverse (html) {
  htmlArray = html.split(' ');
  var htmlReverse = htmlArray.reverse();
  console.log(htmlReverse.toString());

}

getHTML(requestOptions, printReverse);