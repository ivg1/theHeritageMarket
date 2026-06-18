const Roles = require("../db/roles");

const needPrivilege = async (req, res, next) => {
    const response = await Roles.getRole(req.userId);
    const modState = response.is_mod;
    const adminState = response.is_admin;

    if (!modState && !adminState) return res.status(403).json({ message: "mate, you arent privileged to be allowed to do that lol" });

    next();
}

const needAdmin = async (req, res, next) => {
    const response = await Roles.getRole(req.userId);
    const adminState = response.is_admin;

    if (!adminState) return res.status(403).json({ message: "you arent admin buddy" });

    next();
}

const isSameId = async (req, res, next) => {
    const targetId = Number(req.body.id);
    const requestId = Number(req.userId);

    if (targetId !== requestId) return res.status(403).json({ message: "get out" });

    next();
}

module.exports = { needPrivilege, needAdmin, isSameId };