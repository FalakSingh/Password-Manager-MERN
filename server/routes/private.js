const express = require("express");
const router = express.Router();
const { validate } = require("../middleware/validateUser");

router.route("/userPage").get(validate, userPage);
