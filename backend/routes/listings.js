const express = require("express");
const router = express.Router();

const listingsController = require("../controllers/listingsController");

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

router.post("/create", listingsController.createListing_post);
router.post("/update", listingsController.updateListing_post);
router.post("/delete", listingsController.deleteListing_post);

module.exports = router;