const { getAllListingsBasicView, getAllListingsDetailedView, getListingDetails } = require("../db/listings/getListing");
const { createListing } = require("../db/listings/createListing");
const {
    updateListingTitle,
    updateListingDescription,
    updateListingPrice,
    updateListingTags
} = require("../db/listings/updateListing");
const { trulyDeleteListing, deleteListing } = require("../db/listings/deleteListing");

//status 404 = not found
//status 201 = created resource (for post)
//status 200 = ok
//status 400 = bad

//works
//what is the name for listings that u display first to get attention? idk
const getListingsHeroData = async (req, res, next) => {
    try {
        const result = await getAllListingsBasicView();
        if (!result) res.status(400).json({ error: "failed getting hero data of all listings" });
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

//works
//read everything in a listing
const dataOfListing_get = async (req, res, next) => {
    try {
        //const data = await getListingDetails();
        const { id } = req.query;
        const result = await getListingDetails(id);
        if (!result) {
            console.log("error getting data of listing");
            res.status(400).json({ error: "error getting data of listing in controller" });
        }
        console.log("data of listing retreived");
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

//works
//create listing
const createListing_post = async (req, res, next) => {
    try {
        const {
            title, 
            description, 
            price, 
            seller_email, 
            seller_phone, 
            seller_id, 
            tags
        } = req.body;

        if (!title || !price || !seller_id) {
            return res.status(400).json({ message: "missing must have fields"});
        }

        const result = await createListing(
            title, 
            description, 
            price, 
            seller_email, 
            seller_phone, 
            seller_id, 
            tags
        );
        
        if (!result) res.status(400).json({ error: "failed creating listing" });
        res.status(201).json({ message: "listing created" });
    } catch (err) {
        next(err);
    }
};

//works
//update listing 
const updateListing_post = async (req, res, next) => {
    try {
        const { id, title, description, price, tags } = req.body;

        let listingChanges = [];
        if (title) {
            listingChanges.push(await updateListingTitle(title, id));
        }
        if (description) {
            listingChanges.push(await updateListingDescription(description, id));
        }
        if (price) {
            listingChanges.push(await updateListingPrice(price, id));
        }
        if (tags) {
            listingChanges.push(await updateListingTags(tags, id));
        }
        console.log("listing updated");
        res.status(201).json({ changes: listingChanges});
    } catch (err) {
        next(err);
    }
};

//works
//delete listing
const deleteListing_post = async (req, res, next) => {
    const { id } = req.query;
    const result = await deleteListing(id);
    if (!result) {
        console.log("error deleting listing");
        res.status(400).json({ error: "error deleting listing" });
    }
    res.status(201).json({ message: "listing deleted" });
};

module.exports = {
    getListingsHeroData,
    dataOfListing_get,
    createListing_post,
    updateListing_post,
    deleteListing_post,
}; //100 lines EXACTLY lol