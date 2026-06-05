const pool = require("../db");

const deleteUser = async (id) => {
    const query = "DELETE FROM users WHERE id = $1";
    
    try {
        const result = await pool.query(query, [id]);
        console.log(`user of id ${id} deleted`);
    } catch (err) {
        console.error("error deleting user:", err);
    }
}

module.exports = { deleteUser };