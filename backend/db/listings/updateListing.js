const pool = require("../db");

const updateListingTitle = async (new_title, listing_id) => {
    const query = "UPDATE listings SET title = $1 WHERE id = $2";
    const values = [new_title, listing_id];

    try {
        const result = await pool.query(query, values);
        console.log(`title of listing id ${listing_id} changed`);
        return "title";
    } catch (err) {
        console.error("error changing listing title:", err);
    }
}

const updateListingDescription = async (new_description, listing_id) => {
    const query = "UPDATE listings SET description = $1 WHERE id = $2";
    const values = [new_description, listing_id];

    try {
        const result = await pool.query(query, values);
        console.log(`description of listing id ${listing_id} changed`);
        return "description";
    } catch (err) {
        console.error("error changing listing description:", err);
    }
}

const updateListingPrice = async (new_price, listing_id) => {
    const query = "UPDATE listings SET price = $1 WHERE id = $2";
    const values = [new_price, listing_id];

    try {
        const result = await pool.query(query, values);
        console.log(`price of listing id ${listing_id} changed`);
        return "price";
    } catch (err) {
        console.error("error changing listing price:", err);
    }
}

const updateListingTags = async (new_tags, listing_id) => {
    const query = "UPDATE listings SET tags = $1 WHERE id = $2";
    const values = [new_tags, listing_id];

    try {
        const result = await pool.query(query, values);
        console.log(`tags of listing id ${listing_id} changed`);
        return "tags";
    } catch (err) {
        console.error("error changing listing tags:", err);
    }
}

module.exports = {
    updateListingTitle,
    updateListingDescription,
    updateListingPrice,
    updateListingTags
}