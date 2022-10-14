const jwtDecode = require("../utils/jwtDecode");
const { errResponse, successResponse } = require("../utils/Response");
const User = require("../models/user");

const userPage = async (req, res) => {
  const user = req.user;
  responseObject = {
    fName:user.fName,
    lName:user.lName,
    msg:"User Authorized Successfully"
  }
  successResponse(res, 201, responseObject)
}


const userPasswords = async (req, res) => {

}


module.exports = {userPage, userPasswords};