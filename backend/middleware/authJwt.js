const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.headers["x-access-token"];

    if (!token) {
        //i could use .status(400).send()? check later
        return res.status(400).json({ message: "no token"});
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(400).json({ message: "unauthorised"});
        req.userId = decoded.id;
        next();
    });
}

module.exports = { verifyToken };