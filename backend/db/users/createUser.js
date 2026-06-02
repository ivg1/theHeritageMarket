const { pool } = require("../db");

const createUser = async (
    username, 
    email, 
    password_hash, 
    phone
) => {
    const query = `INSERT INTO users (username, email, password_hash, phone) VALUES ($1, $2, $3, $4) RETURNING *`;
    const values = [
        username, 
        email, 
        password_hash, 
        phone
    ];

    try {
        const result = await pool.query(query, values);
        console.log("new user created");
        return result.rows[0];
    } catch (err) {
        console.error("error creating user in createUser.js:", err);
    }
}

module.exports = { createUser };