const express = require("express");
const router = express.Router();
const {login, register, forgotPass, resetPass} = require("../controllers/auth");


router.route("/login").post(login);
router.route("/register").post(register);
router.route("/forgotPass").post(forgotPass);
router.route("/resetPass/:resetToken").put(resetPass);


module.exports = router;