const { User } = require("./../models/users.model");
const { generateJwtToken } = require("./services/auth.service");
const defaultUserRole = "admin";
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET || "foobar";

signInHandler = async (req, res) => {
  let user = await User.findOne({ email: req.body.email }).exec();
  
  if (!user) {
    return res.status(400).send({ message: "User not found" });
  }

  if (user.password != req.body.password) {
    return res.status(400).send({ message: "Wrong Password!" });
  }

  const accessToken = generateJwtToken(
    req.body.email,
    defaultUserRole,
    accessTokenSecret
  );

  res.send({ token: accessToken });
};

exports.signInHandler = signInHandler;
