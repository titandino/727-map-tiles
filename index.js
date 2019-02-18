const express = require('express');
const app = express();

app.use(express.static('public'));

const server = app.listen(80, function() {
  console.log('Local server listening at http://' + server.address().address + ':' + server.address().port);
});
