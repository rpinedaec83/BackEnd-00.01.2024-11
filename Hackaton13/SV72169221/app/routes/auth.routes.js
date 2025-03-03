
const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller.js");
const { checkDuplicateUsernameOrEmail } = require("../middleware/verifySignup.js");
const { checkUserAndPassword } = require("../middleware/verifylogin.js");

router.post("/signup", checkDuplicateUsernameOrEmail, authController.signup);
router.post("/signin", checkUserAndPassword, authController.signin);
router.post("/signout", authController.signout);

module.exports = router;