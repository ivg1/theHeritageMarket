const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("index route");
    //res.redirect("/listings");
});

module.exports = router;