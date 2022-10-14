const jwt = require("jsonwebtoken");

const jwtDecode = token => jwt.verify(token, process.env.JWT_SECRET);

module.exports = jwtDecode;