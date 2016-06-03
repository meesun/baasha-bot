var fs = require('fs');

var express = require('express');
var app = express();
app.get('/', (req, res) => {
  fs.readFile('templates/index.html', function (err, data) {
    if (err) {
      res.status(500).send('Could not compile template!');
      return;
    }

    var compiledHtml = data.toString()
                           .replace('{{{authUrl}}}','http://auth.bompod.hasura-app.io')
                           .replace('{{{dataUrl}}}','http://data.bompod.hasura-app.io');
    res.send(compiledHtml);
  });
});

app.use(express.static('static'));

app.listen(8080, '0.0.0.0', () => {
  console.log('Todo app listening on port 8080!');
});
