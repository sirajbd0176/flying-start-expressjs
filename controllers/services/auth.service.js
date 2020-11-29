const jwt = require("jsonwebtoken");

generateJwtToken = (user, role, accessTokenSecret) => 
  jwt.sign({ user: user, role: role }, accessTokenSecret);


exports.generateJwtToken = generateJwtToken;
