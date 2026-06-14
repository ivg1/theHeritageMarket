const { pool } = require("./db.js");

const Roles = {
    async getRole(id) {
        try {
            const result = await pool.query("SELECT role, isAdmin FROM users WHERE id = $1", [id]);
            return result.rows[0];
        } catch (err) {
            console.error("error in roles db at checkAdmin()", err);
            throw err;
        }
    },
    
};

module.exports = Roles;