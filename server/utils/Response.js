const errResponse = (res, statusCode, message) =>
  res.status(statusCode).json({ success: false, error: message });

const successResponse = (res, statusCode, message) =>
  res.status(statusCode).json({ success: true, data: message });

module.exports = { errResponse, successResponse };
