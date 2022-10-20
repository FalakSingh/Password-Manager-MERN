const jwtDecode = require("../utils/jwtDecode");
const { errResponse } = require("../utils/Response");
const User = require("../models/user");

const validate = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    errResponse(res, 400, "Not Authorized to access this route");
  }

  try {
    const decoded = jwtDecode(token);
    const user = await User.findOneId(decoded.id);

    if (!user) {
      errResponse(res, 404, "Unidentified User");
    }
    req.user = user;
    next();
  } catch (error) {
    errResponse(res, 401, "Not Authorized to access this route");
  }
};

module.exports = validate;

