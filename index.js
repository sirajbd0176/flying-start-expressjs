const e = require('express');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
var path = require('path');
var users = [
  { username: 'sabbir', password: 123 },
  { username: 'seraj', password: 'tomcat' }
];
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static(path.join(__dirname, 'public')));

signUpHandler = (req, res) => {
  var foundUser = users.find((u) => u.username == req.body.username);
  if (!foundUser) {
    return res.res.status(500).json({ message: 'user [' + req.body.username + '] not found' });
  }
  if (foundUser.password != req.body.password) {
    return res.status(500).json({ message: 'wrong passwword' });
  }
  res.send({ message: 'OK' });
}

app.post('/signup', signUpHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});