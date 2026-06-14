const Roles = require("../db/roles");

const needPrivilege = async (req, res, next) => {
    const role = await Roles.getRole(req.userId);
    if (role !== "admin" && role !== "mod") return res.status(403).json({ message: "forbidden" });

    next();
}

const needAdmin = async (req, res, next) => {
    const role = await Roles.getRole(req.userId);
    if (role !== "admin") return res.status(403).json({ message: "forbidden" });

    next();
}

const isSameId = async (req, res, next) => {
    const targetId = Number(req.body.id);
    const requestId = Number(req.userId);

    if (targetId !== requestId) return res.status(403).json({ message: "Not same id" });

    next();
}

module.exports = { needPrivilege, needAdmin, isSameId };