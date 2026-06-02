const pool = require("../db");


const getAllListingsBasicView = async () => {
    const query = "SELECT title, description, price, tags, created_at FROM listings WHERE visibility = TRUE";
    try {
        return await pool.query(query);
    } catch (err) {
        console.error("error getting hero data of all listings:", err);
    }
};

//i dont use rn, but ill leave it here
const getAllListingsDetailedView = async () => {
    const query = pool.query("SELECT * FROM listings WHERE visibility = TRUE");
    try {
        const result = await pool.query(query);
        return result.rows;
    } catch (err) {
        console.error("error getting detailed data of listing:", err);
    }
};

const getListingDetails = async (id) => {
    const query = "SELECT * FROM listings WHERE id = $1";
    console.log(id);
    try {
        const result = await pool.query(query, [id]);
        return result.rows;
    } catch (err) {
        console.error("error getting details of listing:", err);
    }
}

module.exports = { getAllListingsDetailedView, getAllListingsBasicView, getListingDetails };