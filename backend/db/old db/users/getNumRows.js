const pool = require("../../db");

const getNumRows = async () => {
    try {
        const result = await pool.query("SELECT * FROM users");
        if (result.rows) {
            return result.rows.length;
        } else {
            return 0;
        }
    } catch (err) {
        console.error("there aint no rows in users", err);
    }
}

module.exports = { getNumRows };