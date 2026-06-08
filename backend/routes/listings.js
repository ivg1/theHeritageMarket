const express = require("express");
const router = express.Router();

const listingsController = require("../controllers/listingsController");
const authJwt = require("../middleware/authJwt");

/* (current functions)
module.exports = {
    getListingsHeroData_get,
    dataOfListing_get,
    createListing_post,
    updateListing_post,
    deleteListing_post,
};
*/

router.get("/getAll", listingsController.getListingsHeroData_get);
router.get("/read", listingsController.dataOfListing_get);

router.post("/create", [authJwt.verifyToken], listingsController.createListing_post);
router.post("/update", [authJwt.verifyToken], listingsController.updateListing_post);
router.post("/delete", [authJwt.verifyToken], listingsController.deleteListing_post);

module.exports = router;