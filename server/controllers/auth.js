const User = require("../models/user");
const { successResponse, errResponse } = require("../utils/Response");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");

//function to handle post rqst for registering a user
const register = async (req, res) => {
  const { fName, lName, email, password } = req.body;

  try {
    //creating a user in db
    await User.create({
      fName,
      lName,
      email,
      password,
    }).then(() => {
      return successResponse(res, 200, "Account Created Successfully");
    });

    // handles error
  } catch (err) {
    // 11000 is error code for duplicate key in mongoDB
    if (err.code == 11000) {
      return errResponse(res, 500, "Please try again, Email Already exists.");
    } else {
      return errResponse(res, 500, err);
    }
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // .select("+password") also returns the password
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return errResponse(res, 401, "Invalid Credentials");
    }
    // checkPass is a mongoose method declared in users file of userSchema
    const isMatch = await user.checkPass(password);

    if (!isMatch) {
      return errResponse(res, 401, "Invalid Credentials");
    }
    // returns authToken as response
    return sendToken(user, 200, res);

  } catch (err) {
    console.log(err);
    // errResponse(res, 500, err);
  }
};

const forgotPass = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return errResponse(res, 404, "Email could not be sent");
  }
  // getResetPassToken is also a method declared in users file of userSchema
  const resetToken = user.getResetPassToken();
  
  //saving the reset token in user collection
  await user.save();

  const url = `${process.env.RESET_URL}${resetToken}`;

  // function to send mail in utils
  sendEmail({
    to: email,
    subject: "Password Manager Reset Token",
    text: url,
  });

  try {
    return successResponse(res, 200, "Email Sent, Please Check your inbox");

    // if there is any error we fill clear out the following fields
  } catch (error) {
    user.resetPassToken = undefined;
    user.resetPassExpires = undefined;

    await user.save();
    return errResponse(res, 500, error);
  }
};

const resetPass = async (req, res) => {
  // resetToken was saved as a hash in db, So recieving the token as params through URL and hashing it
  const resetToken = crypto
    .createHash("sha256")
    .update(req.params.resetToken)
    .digest("hex");

  try {
    //checking if the resetToken is still valid
    const user = await User.findOne({
      resetToken,
      resetPassExpires: { $gt: Date.now() },
    });

    if (!user) {
      return errResponse(res, 401, "Invalid Reset Token");
    }

    //saving the password and clearing out the resetToken fields
    user.password = req.body.password;
    user.resetPassToken = undefined;
    user.resetPassExpires = undefined;

    await user.save();

    return successResponse(res, 200, "Password Updated Successfully");
  } catch (error) {
    return errResponse(res, 500, "Something went wrong, Please try again");
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
