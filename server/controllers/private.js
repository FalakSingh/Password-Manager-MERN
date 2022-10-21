const jwtDecode = require("../utils/jwtDecode");
const { errResponse, successResponse } = require("../utils/Response");
const User = require("../models/user");

const userPage = async (req, res) => {
  const user = req.user;
  responseObject = {
    fName: user.fName,
    lName: user.lName,
    msg: "User Authorized Successfully",
  };
  successResponse(res, 201, responseObject);
};

const saveUserPassword = async (req, res) => {
  const { website, username, email, password, passkey } = req.body;
  const uid = req.user._id;
  console.log(uid);
  const user = await User.findById(uid);
  console.log(user);
};

module.exports = { userPage, saveUserPassword };
