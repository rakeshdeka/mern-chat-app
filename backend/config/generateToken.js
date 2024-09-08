const jwt = require("jsonwebtoken");
// console.log("process.env.JWT_SECRET",process.env.JWT_SECRET);
JWT_SECRET = "rakesh123"; // this needs to be in .env but not getting from .env

const generateToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
