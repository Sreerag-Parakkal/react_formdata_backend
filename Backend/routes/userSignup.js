const express = require("express");
const { userSignup } = require("../controllers/userController");
const router = express.Router();


router.route('/userSignup').post(userSignup);

module.exports = router