const express = require("express");
const router = express.Router();

const authJwt = require("../middleware/authJwt");

const Users = require("../db/users");

router.get("/", [authJwt.verifyToken], (req, res) => {
    res.send("hello.");
    //res.redirect("/listings");
});

router.get("/me", [authJwt.verifyToken], async (req, res) => {
    const user = await Users.me(req.userId);

    if (!user) return res.status(404).json({ message: "user not found (me function)" });

    res.json(user);
});

module.exports = router;