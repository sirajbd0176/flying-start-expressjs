const { User } = require("./../models/users.model");
const { generateJwtToken } = require("./services/auth.service");
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET || "foobar";
const defaultUserRole = "admin";

signUpHandler = (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  user.save();

  const accessToken = generateJwtToken(
    req.body.email,
    defaultUserRole,
    accessTokenSecret
  );
  
  res.send({ token: accessToken });
};


exports.signUpHandler = signUpHandler;
