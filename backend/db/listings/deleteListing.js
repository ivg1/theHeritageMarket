const pool = require("../db");

//probably will never use
const trulyDeleteListing = async (listing_id) => {
    const query = "DELETE FROM listings WHERE id = $1";

    try {
        const result = await pool.query(query, [listing_id]);
        console.log(`listing of id ${listing_id} ACTUALLY deleted`);
    } catch (err) {
        console.error("error actually deleting listing:", err);
    }
}

//doesnt actually delete, it sets visibility to false (so to track down jokesters or whatever)
const deleteListing = async (listing_id) => {
    const query = "UPDATE listings SET visibility = FALSE WHERE id = $1";

    try {
        const result = await pool.query(query, [listing_id]);
        console.log(`listing of id ${listing_id} removed`);
    } catch (err) {
        console.error("error deleting listing:", err);
    }
}

module.exports = { trulyDeleteListing, deleteListing };