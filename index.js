const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
var path = require('path');
var users = [
  { username: 'sabbir', password: 123 },
  { username: 'seraj', password: 'tomcat' }
];

var User = {};
User.findOne = function(jsonData, fn) {
  var foundUser = users.find((u) => u.username == jsonData.username);
  if (!foundUser) {
    return fn(null, null);
  }
  return fn(null, foundUser);
};

// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form
app.use(bodyParser.urlencoded({ extended: true })); 
// serve static content for the app from the "public directory in the application directory
app.use('/', express.static(path.join(__dirname, 'public'))); 

signUpHandler = (req, res) => {

  User.findOne({username: req.body.username},function(err, user){
    if(err) { 
      return res.status(500).json(err);
    }
    if(!user) {
      return res.status(500).json({ message: 'user [' + req.body.username + '] not found' });
    }
    if (user.password != req.body.password) {
      return res.status(500).json({ message: 'wrong passwword' });
    }
    res.send({ message: 'OK' });
  });
}

app.post('/signup', signUpHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});