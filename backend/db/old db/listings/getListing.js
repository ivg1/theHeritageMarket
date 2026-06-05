const pool = require("../db");

const getAllListingsBasicView = async () => {
    const query = "SELECT title, description, price, tags, images, created_at FROM listings WHERE visibility = TRUE ORDER BY id DESC";
    try {
        const result = await pool.query(query);
        console.log(`basic data of ${result.rows.length} listings retreived`, result.rows.length);
        //result.rows.push({numListings: result.rows.length}); (will check length in frontend)
        return result.rows;
    } catch (err) {
        console.error("error getting hero data of all listings:", err);
    }
};

//i dont use rn, but ill leave it here
const getAllListingsDetailedView = async () => {
    const query = pool.query("SELECT * FROM listings WHERE visibility = TRUE ORDER BY id DESC");
    try {
        const result = await pool.query(query);
        return result.rows;
    } catch (err) {
        console.error("error getting detailed data of listing:", err);
    }
};

const getListingDetails = async (id) => {
    const query = "SELECT * FROM listings WHERE id = $1";
    try {
        const result = await pool.query(query, [id]);
        return result.rows;
    } catch (err) {
        console.error("error getting details of listing in getListingDetails", err);
    }
}

module.exports = { getAllListingsDetailedView, getAllListingsBasicView, getListingDetails };