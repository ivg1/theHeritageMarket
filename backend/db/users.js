const { pool } = require("./db.js");

const Users = {
    auth: {
        async signup(username, email, password_hash, phone, fname, lname) {
            const query = "INSERT INTO users (username, email, password_hash, phone, fname, lname) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id, email";
            const values = [username, email, password_hash, phone, fname, lname];

            try {
                const result = await pool.query(query, values);
                console.log("db created account");
                return result.rows[0];
            } catch (err) {
                console.error("error in users db signup()", err);
                throw err;
            }
        },
        async login(username, password_hash) {
            const query = "SELECT * FROM users WHERE email = $1 AND password_hash = $2";
            const values = [username, password_hash];

            try {
                const result = await pool.query(query, values);
                console.log("db fetched user by login");
                return result.rows[0] || null;
            } catch (err) {
                console.error("error in users db login()", err);
                throw err;
            }
        },
        async getUserByEmail(email) {
            const query = "SELECT * FROM users WHERE email = $1";
            const values = [email];

            try {
                const result = await pool.query(query, values);
                console.log("db fetched user by email");
                return result.rows[0] || null;
            } catch (err) {
                console.error("error in users db getUserByEmail()", err);
                throw err;
            }
        },
        async getUserByUsername(username) {
            const query = "SELECT * FROM users WHERE username = $1";
            const values = [username];

            try {
                const result = await pool.query(query, values);
                console.log("db fetched user by username");
                return result.rows[0] || null;
            } catch (err) {
                console.error("error in users db getUserByEmail()", err);
                throw err;
            }
        },
        async getUserById(id) {
            const query = "SELECT id, username, email, phone FROM users WHERE id = $1";

            try {
                const result = await pool.query(query, [id]);
                if (result.rows.length > 0) {
                    console.log(`user of id ${id} found`);
                    return result.rows[0];
                }

                console.log("no user found");
                return null;
            } catch (err) {
                console.error("error in users db auth.getUserById()", err);
                throw err;
            }
        },
        async getListingDataByUsername(username) {
            const query = "SELECT id, email, phone FROM users WHERE username = $1";

            try {
                const result = await pool.query(query, [username]);
                if (result.rows.length > 0) {
                    console.log(`user of username ${username} found`);
                    return result.rows[0];
                }

                console.log("no user found");
                return null;
            } catch (err) {
                console.error("error in users db auth.getListingDataByUsername()", err);
                throw err;
            }
        }
    },
    checkUserExistence: async function (username, email) {
        const query = "SELECT id FROM users WHERE username = $1 OR email = $2";
        try {
            const result = await pool.query(query, [username, email]);
            return result.rows.length > 0;
        } catch (err) {
            console.error("error in users db checkUserExistence()", err);
            throw err;
        }
    },
    data: {
        async getNum() {
            try {
                const result = await pool.query("SELECT COUNT(*) FROM users");
                console.log("db fetched number of rows in users");
                return result.rows[0];
            } catch (err) {
                console.error("error in users db data.getNum()", err);
                throw err;
            }
        }
    },
    update: {
        async username(username, id) {
            const query = "UPDATE users SET username = $1 WHERE id = $2 RETURNING *";
            const values = [username, id];

            try {
                const result = await pool.query(query, values);
                console.log(`db changed username for user id ${id}`);
                return result.rows[0] || null;
            } catch (err) {
                console.error("error in users db update.username()", err);
                throw err;
            }
        },
        async password(password_hash, id) {
            const query = "UPDATE users SET password_hash = $1 WHERE id = $2 RETURNING *";
            const values = [password_hash, id];

            try {
                const result = await pool.query(query, values);
                console.log(`db changed password for user id ${id}`);
                return result.rows[0] || null;
            } catch (err) {
                console.error("error in users db update.password()", err);
                throw err;
            }
        },
        async email(email, id) {
            const query = "UPDATE users SET email = $1 WHERE id = $2 RETURNING *";
            const values = [email, id];

            try {
                const result = await pool.query(query, values);
                console.log(`db changed email for user id ${id}`);
                return result.rows[0] || null;
            } catch (err) {
                console.error("error in users db update.email()", err);
                throw err;
            }
        },
        async phone(phone, id) {
            const query = "UPDATE users SET phone = $1 WHERE id = $2 RETURNING *";
            const values = [phone, id];

            try {
                const result = await pool.query(query, values);
                console.log(`db changed phone for user id ${id}`);
                return result.rows[0] || null;
            } catch (err) {
                console.error("error in users db update.phone()", err);
                throw err;
            }
        }
    },
    danger: {
        async delete(id) {
            try {
                const result = await pool.query("DELETE FROM users WHERE id = $1 RETURNING *", [id]);
                console.log(`db deleted user of id ${id}`);
                return result.rows[0] || null;
            } catch (err) {
                console.error("error in users db danger.delete()", err);
                throw err;
            }
        }
    }
};

module.exports = Users;