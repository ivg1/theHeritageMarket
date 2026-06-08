const express = require("express");
const router = express.Router();

const authJwt = require("../middleware/authJwt");

router.get("/", [authJwt.verifyToken], (req, res) => {
    res.send("index route");
    //res.redirect("/listings");
});

module.exports = router;