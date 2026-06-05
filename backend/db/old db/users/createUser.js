const { pool } = require("../../db");

const checkUserExistence = async (username, email) => {
    const query = "SELECT * FROM users WHERE username = $1 OR email = $2 OR phone = $3";
    const values = [username, email];

    try {
        const result = await pool.query(query, values);
        return result.rows.length > 0;
    } catch (err) {
        console.log("error getting checking user existence", err);
    }
}

const createUser = async (
    username, 
    email, 
    password_hash, 
    phone
) => {
    const query = "INSERT INTO users (username, email, password_hash, phone) VALUES ($1, $2, $3, $4) RETURNING id, email";
    const values = [
        username, 
        email, 
        password_hash, 
        phone
    ];

    try {
        //todo: later add a method to tell user if it's username or email that is taken.
        const userExists = await checkUserExistence(username, email);
        console.log("exists? ", userExists);
        if (userExists) {
            console.log("user creation stopped. already exists");
            return false;
        }

        const result = await pool.query(query, values);
        console.log("new user created");
        return true;
    } catch (err) {
        console.error("error creating user", err);
    }
}

const getUserByEmail = (email) => {
    return pool.query("SELECT * FROM users WHERE email = $1", [email]);
}

module.exports = { createUser, getUserByEmail };