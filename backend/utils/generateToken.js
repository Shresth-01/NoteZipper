const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, 'shresth1234', {
    expiresIn: "30d",
  });
};

module.exports =  generateToken;
