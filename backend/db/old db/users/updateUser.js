const pool = require("../db");

const updateUserEmail = async (new_email, id) => {
    const query = "UPDATE users SET email = $1 WHERE id = $2 RETURNING *";
    const values = [new_email, id];
    try {
        const result = await pool.query(query, values);
        console.log(`email changed for user id ${id}`);
    } catch (err) {
        console.error("error changing user's email:", err);
    }
}

const updateUserPhone = async () => {
    const query = "UPDATE users SET phone = $1 WHERE id = $2 RETURNING *";
    const values = [new_phone, id];
    try {
        const result = await pool.query(query, values);
        console.log(`phone changed for user id ${id}`);
    } catch (err) {
        console.error("error changing user's phone:", err);
    }
}

const updateUserUsername = async () => {
    const query = "UPDATE users SET username = $1 WHERE id = $2 RETURNING *";
    const values = [new_username, id];
    try {
        const result = await pool.query(query, values);
        console.log(`username changed for user id ${id}`);
    } catch (err) {
        console.error("error changing user's username:", err);
    }
}

module.exports = { updateUserEmail, updateUserPhone, updateUserUsername };