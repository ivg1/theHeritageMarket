const Listings = require("../db/listings");
const Users = require("../db/users");

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
    console.log("body:", req.body);
    const { 
        id,
        title, 
        description, 
        price,
        negotiable, 
        tags, 
        seller_email,
        seller_phone, 
        email_show,
        phone_show 
    } = req.body;
    
    if (!id) {
        console.error("no listing id");
        return res.status(400).json({ error: "missing listing id" });
    }

    const listing = await Listings.data.getFullData(id);
    const user = await Users.auth.private.getDataById(req.userId);
    if (req.userId !== listing.seller_id && !user.is_mod) return res.status(403).json({ error: "you dont own the listing" });

    try {
        let listingChanges = [];
        if (title !== undefined) {
            listingChanges.push(await Listings.update.title(title, id));
        }
        if (description !== undefined) {
            listingChanges.push(await Listings.update.desc(description, id));
        }
        if (price !== undefined) {
            listingChanges.push(await Listings.update.price(price, id));
        }
        if (negotiable !== undefined) {
            listingChanges.push(await Listings.update.negotiable(negotiable, id));
        }
        if (tags !== undefined) {
            listingChanges.push(await Listings.update.tags(tags, id));
        }
        if (seller_email !== undefined) {
            listingChanges.push(await Listings.update.seller_email(seller_email, id));
        }
        if (seller_phone !== undefined) {
            listingChanges.push(await Listings.update.seller_phone(seller_phone, id));
        }
        if (email_show !== undefined) {
            listingChanges.push(await Listings.update.email_show(email_show, id));
        }
        if (phone_show !== undefined) {
            listingChanges.push(await Listings.update.phone_show(phone_show, id));
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


const modsListingHeroData_get = async (req, res) => {
    try {
        const rows = await Listings.data.mods.getHeroAll();

        console.log("hero data of all listings retrieved");
        return res.status(200).json(rows);
    } catch (err) {
        console.error(err);
        console.error("error getting hero data of listings");
        return res.status(400).json({ error: "failed getting hero data of all listings" });
    }
}
const modsRejectListing_post = async (req, res) => {
    try {
        const { id } = req.body;
        const rows = await Listings.mods.reject(id);

        console.log("listing rejected");
        return res.status(200).json(rows);
    } catch (err) {
        console.error(err);
        console.error("error rejecting listing");
        return res.status(400).json({ error: "error rejecting listing" });
    }
}
const modsAcceptListing_post = async (req, res) => {
    try {
        const { id } = req.body;
        const rows = await Listings.mods.accept(id);

        console.log("listing accepted");
        return res.status(200).json(rows);
    } catch (err) {
        console.error(err);
        console.error("error accepting listing");
        return res.status(400).json({ error: "error accepting listing" });
    }
}


module.exports = {
    getListingsHeroData_get,
    dataOfListing_get,
    createListing_post,
    updateListing_post,
    deleteListing_post,

    modsListingHeroData_get,
    modsRejectListing_post,
    modsAcceptListing_post
};