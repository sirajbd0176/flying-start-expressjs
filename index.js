import express, { static } from 'express';
const app = express();
import { json, urlencoded } from 'body-parser';
const port = process.env.PORT || 5000;
const dbUrl = process.env.MONGO_DB_URL || 'mongodb://localhost:27017/flying-start-express';
import { join } from 'path';
import { connect } from 'mongoose';
import { signUpHandler } from './controllers/signup.controller';



connect( dbUrl, {useNewUrlParser: true})
        .then(() => console.log('DB connected'))
        .catch((err) => console.log('Connection failed: '+ err));

// for parsing application/json
app.use(json());
// for parsing application/x-www-form
app.use(urlencoded({ extended: true }));
// serve static content for the app from the "public directory in the application directory
app.use('/', static(join(__dirname, 'public'))); 

app.post('/signup', signUpHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});