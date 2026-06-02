const pool = require("../db");

const createListing = async (
    title, 
    description, 
    price, 
    seller_email, 
    seller_phone, 
    seller_id, 
    tags
) => {
    const query = "INSERT INTO listings (title, description, price, seller_email, seller_phone, seller_id, tags) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *";
    const values = [
        title, 
        description, 
        price, 
        seller_email, 
        seller_phone,
        seller_id, 
        tags
    ];

    try {
        const result = await pool.query(query, values);
        return result;
    } catch (err) {
        console.error("error creating listing:", err);
    }
}

module.exports = { createListing };