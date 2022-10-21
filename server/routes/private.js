const express = require("express");
const router = express.Router();
const { userPage, saveUserPassword } = require("../controllers/private");
const validate = require("../middleware/validateUser");

router.use(validate);

router.route("/userPage").get(userPage);
router.route("/savePass").post(saveUserPassword);

module.exports = router;
