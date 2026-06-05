const pool = require("../db");

const getUsers = async () => {
    try {
        const result = await pool.query("SELECT id FROM users");
        console.log("num users:", result.rows.length);
        return result.rows.length;
    } catch (err) {
        console.error("error getting users in getUsers.js:", err);
    }
}

const getUserById = async (id) => {
    const query = "SELECT id, username, email, phone FROM users WHERE id = $1";
    try {
        const result = await pool.query(query, [id]);
        if (result.rows.length > 0) {
            console.log(`user of id ${id} found`);
            return result.rows[0];
        }
        
        console.log("no user found");
        return false;
    } catch (err) {
        console.error("error finding user in getUsers.js:", err);
    }
}

module.exports = { getUsers, getUserById };