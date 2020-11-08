var { User } = require("./../models/users.model");

signUpHandler = (req, res) => {

    const user = new User({name: req.body.name, email: req.body.email, password: req.body.password});
    user.save();
    res.send({ message: 'OK' });
  };

  exports.signUpHandler = signUpHandler;