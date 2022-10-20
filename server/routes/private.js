const express = require("express");
const router = express.Router();
const {userPage} = require("../controllers/private");
const validate = require("../middleware/validateUser");
router.route("/userPage").get(validate, userPage);

module.exports = router;