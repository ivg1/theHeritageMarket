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

//what is the name for listings that u display first to get attention? idk
const getListingsHeroData = async (req, res, next) => {
    try {
        res.status(200).json(await getAllListingsBasicView());
    } catch (err) {
        next(err);
    }
};

//read everything in a listing
const dataOfListing_get = async (req, res, next) => {
    try {
        //const data = await getListingDetails();
        const listing_id = req.params.id;
        res.status(200).json(await getListingDetails(listing_id));
    } catch (err) {
        next(err);
    }
};

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
            return res.status(400).json({ message: "missing must have items"});
        }

        res.status(201).json(await createListing(
            title, 
            description, 
            price, 
            seller_email, 
            seller_phone, 
            seller_id, 
            tags
        ));
    } catch (err) {
        next(err);
    }
};

//update listing 
const updateListing_post = async (req, res, next) => {
    try {
        const { listing_id } = req.params;
        const { new_title, new_description, new_price, new_tags } = req.body;

        let listingChanges;
        if (new_title) {
            listingChanges = await updateListingTitle(new_title, listing_id);
        }
        if (new_description) {
            listingChanges = await updateListingDescription(new_description, listing_id);
        }
        if (new_price) {
            listingChanges = await updateListingPrice(new_price, listing_id);
        }
        if (new_tags) {
            listingChanges = await updateListingTags(new_tags, listing_id);
        }

        res.status(201).json(result);
    } catch (err) {
        next(err);
    }
};

//delete listing
const deleteListing_post = async (req, res, next) => {
    //const id = req.params;
    res.status(201).json(await deleteListing(req.params));
};

module.exports = {
    getListingsHeroData,
    dataOfListing_get,
    createListing_post,
    updateListing_post,
    deleteListing_post,
}; //100 lines EXACTLY lol