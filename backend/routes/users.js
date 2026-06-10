const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersController");
const authJwt = require("../middleware/authJwt");

/* (current functions)
module.exports = {
    getNumUsers_get,
    getUserById_get,
    // createUser_post,
    getUserDataByUsername_get,
    updateUser_post,
    deleteUser_post
}
*/

router.get("/", (req, res) => {
    res.send("users route");
});

router.get("/getNum", usersController.getNumUsers_get);
router.get("/getById", usersController.getUserById_get);
router.get("/getDataByUsername", usersController.getUserDataByUsername_get)

//router.post("/create", usersController.createUser_post);
router.post("/update", [authJwt.verifyToken], usersController.updateUser_post);
//router.post("/delete", usersController.deleteUser_post);

module.exports = router;