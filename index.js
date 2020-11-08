const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      port = process.env.PORT || 5000,
      dbUrl = process.env.MONGO_DB_URL || 'mongodb://localhost:27017/flying-start-express';
var path = require('path');
var mongoose = require('mongoose');
const { signUpHandler } = require('./controllers/signup.controller');



mongoose.connect( dbUrl, {useNewUrlParser: true})
        .then(() => console.log('DB connected'))
        .catch((err) => console.log('Connection failed: '+ err));

// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form
app.use(bodyParser.urlencoded({ extended: true }));
// serve static content for the app from the "public directory in the application directory
app.use('/', express.static(path.join(__dirname, 'public'))); 

app.post('/signup', signUpHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});