const express = require("express");
const router = express.Router();

const { userLogin_post, userSignup_post } = require("../controllers/authController");
const { verifyToken } = require("../middleware/authJwt");

router.post("/", verifyToken);
router.post("/signup", userSignup_post);
router.post("/login", userLogin_post);

module.exports = router;