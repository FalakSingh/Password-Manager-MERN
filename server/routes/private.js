const express = require("express");
const router = express.Router();
const { userPage, saveUserPassword, getUserPassword } = require("../controllers/private");
const validate = require("../middleware/validateUser");

router.use(validate);

router.route("/userPage").get(userPage);
router.route("/savePass").post(saveUserPassword);
router.route("/getPass").get(getUserPassword);

module.exports = router;
