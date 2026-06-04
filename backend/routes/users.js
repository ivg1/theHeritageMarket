const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersController");

/* (current functions)
module.exports = {
    getAllUsers_get,
    getUserById_get,
    createUser_post,
    updateUser_post,
    deleteUser_post
}
*/

router.get("/", (req, res) => {
    res.send("users route");
});

router.get("/getNum", usersController.getNumUsers_get);
router.get("/getById", usersController.getUserById_get);

router.post("/create", usersController.createUser_post);
router.post("/update", usersController.updateUser_post);
//router.post("/delete", usersController.deleteUser_post);

module.exports = router;