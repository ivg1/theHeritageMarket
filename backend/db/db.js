const { Pool } = require("pg");

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

pool.on("error", (err, client) => {
    console.error("error occured somewhere", err);
});

const query = async (text, params = []) => {
    try {
        const res = await pool.query(text, params);
        return res;
    } catch (err) {
        throw err;
    }
};

module.exports = { query, pool };