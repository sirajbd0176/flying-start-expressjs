const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
var path = require('path');

app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});