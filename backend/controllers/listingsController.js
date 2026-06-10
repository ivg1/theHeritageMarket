const Listings = require("../db/listings");

const createListing_post = async (req, res) => {
    try {
        const {
            title, 
            description, 
            price, 
            seller_email, 
            seller_phone, 
            seller_id, 
            tags, 
            images, 
            phone_show, 
            email_show,
            is_physical,
            negotiable
        } = req.body;

        if (!title || !price || !seller_id) return res.status(400).json({ message: "missing must have fields"});

        const result = await Listings.create(
            title, 
            description, 
            price, 
            seller_email, 
            seller_phone, 
            seller_id, 
            tags, 
            images, 
            phone_show, 
            email_show,
            is_physical,
            negotiable
        );
        console.log("listing created", result);
        return res.status(201).json({ message: "listing created", listing: result });
    } catch (err) {
        console.error(err);
        return res.status(400).json({ error: "error creating listing"});
    }
}

const updateListing_post = async (req, res) => {
    try {
        const { id, title, description, price, tags } = req.body;

        let listingChanges = [];
        if (title) {
            listingChanges.push(await Listings.update.title(title, id));
        }
        if (description) {
            listingChanges.push(await Listings.update.desc(description, id));
        }
        if (price) {
            listingChanges.push(await Listings.update.price(price, id));
        }
        if (tags) {
            listingChanges.push(await Listings.update.tags(tags, id));
        }

        console.log("listing updated");
        return res.status(200).json({ changes: listingChanges});

    } catch (err) {
        console.error(err);
        return res.status(400).json({ error: "error updating listing"});
    }
};

const getListingsHeroData_get = async (req, res) => {
    try {
        const rows = await Listings.data.getHeroAll();

        console.log("hero data of all listings retrieved");
        return res.status(200).json(rows);
    } catch (err) {
        console.error(err);
        console.error("error getting hero data of listings");
        return res.status(400).json({ error: "failed getting hero data of all listings" });
    }
};

const dataOfListing_get = async (req, res) => {
    try {
        const { id } = req.query;
        const listing = await Listings.data.getFullData(id);
        if (!listing) return res.status(404).json({ message: "listing not found" });

        console.log("data of listing retrieved");
        return res.status(200).json(listing);
    } catch (err) {
        console.error(err);
        console.log("error getting data of listing");
        return res.status(400).json({ error: "error getting data of listing in controller" });
    } 
}

//todo: when i make auth, make this secure ASAP
const deleteListing_post = async (req, res) => {
    try {
        const { id } = req.query;
        const deleted = await Listings.danger.delete(id);
        if (!deleted) return res.status(404).json({ message: "listing not found" });
        return res.status(200).json({ deleted });
    } catch (err) {
        console.error(err);
        return res.status(400).json({ error: "error deleting listing" });
    }
}

module.exports = {
    getListingsHeroData_get,
    dataOfListing_get,
    createListing_post,
    updateListing_post,
    deleteListing_post,
};