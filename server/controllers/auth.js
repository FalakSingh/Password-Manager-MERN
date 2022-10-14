const User = require("../models/user");
const { successResponse, errResponse } = require("../utils/Response");
const sendEmail = require("../utils/sendEmail");

const register = async (req, res) => {
  const { fName, lName, email, password } = req.body;
  try {
    await User.create({
      fName,
      lName,
      email,
      password,
    }).then(() => {
      successResponse(res, 200, "Account Created Successfully");
    });
  } catch (err) {
    if (err.code == 11000) {
      errResponse(res, 500, "Please try again, Email Already exists.");
    } else {
      errResponse(res, 500, err);
    }
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      errResponse(res, 401, "Invalid Credentials");
    }

    const isMatch = await user.checkPass(password);

    if (!isMatch) {
      errResponse(res, 401, "Invalid Credentials");
    }

    sendToken(user, 200, res);
  } catch (err) {
    console.log(err);
    errResponse(res, 500, err);
  }
};

const forgotPass = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    errResponse(res, 404, "Email could not be sent");
  }

  const resetToken = user.getResetPassToken();
  await user.save();

  const url = `${process.env.RESET_URL}${resetToken}`;

  sendEmail({
    to: email,
    subject: "Password Manager Reset Token",
    text: url,
  });

  try {
    successResponse(res, 200, "Email Sent, Please Check your inbox");
  } catch (error) {
    user.resetPassToken = undefined;
    user.resetPassExpires = undefined;

    await user.save();
    errResponse(res, 500, error);
  }
};

const resetPass = async (req, res) => {
  const resetToken = crypto
    .createHash("sha256")
    .update(req.params.resetToken)
    .digest("hex");
    
    try {
      const user = await User.findOne({
        resetToken,
        resetPassExpires: { $gt: Date.now() },
      });
    
      if (!user) {
        errResponse(res, 401, "Invalid Reset Token");
      }
    
      user.password = req.body.password;
      user.resetPassToken = undefined;
      user.resetPassExpires = undefined;
      
      await user.save();
    
      successResponse(res, 200, "Password Updated Successfully");
    
    } catch (error) {
      errResponse(res, 500, "Something went wrong, Please try again")
    }

};

function sendToken(user, statusCode, res) {
  const token = user.getJwt();
  res.status(statusCode).json({
    success: true,
    token: token,
  });
}

module.exports = { register, login, forgotPass, resetPass };
