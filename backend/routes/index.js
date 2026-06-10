const express = require("express");
const router = express.Router();

const authJwt = require("../middleware/authJwt");

router.get("/", [authJwt.verifyToken], (req, res) => {
    res.send("hello.");
    //res.redirect("/listings");
});

module.exports = router;