const { User } = require('./../models/users.model');

signInHandler = async (req, res) => {
  let user = await User.findOne({ email: req.body.email }).exec();
  if (!user) {
    return res.send({ message: "User not found" });
  }
  if(user.password != req.body.password){
    return res.send({ message: "Wrong Password!" });
  }
  return res.send({ message: "OK" });
};

exports.signInHandler = signInHandler;
