const { pool } = require("./db.js");

const Stats = {
    listings: {
        async totalCreated() {
            const result = await pool.query("SELECT total_listings_created FROM stats WHERE id = 1");
            return result.rows[0] || null;
        },
        async increment() {
            const result = await pool.query("UPDATE stats SET total_listings_created = total_listings_created + 1 WHERE id = 1");
            return result.rows[0] || null;
        }
    },
    /*
    users: {
        async totalCreated() {

        },
        async increment() {

        }
    }
    */
}

module.exports = Stats;