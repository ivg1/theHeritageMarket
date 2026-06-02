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

router.get("/getAll", usersController.getAllUsers_get);
router.get("/getById/", usersController.getUserById_get);

router.post("/create", usersController.createUser_post);
router.post("/update/:id", usersController.updateUser_post);
router.post("/delete/:id", usersController.deleteUser_post);

module.exports = router;