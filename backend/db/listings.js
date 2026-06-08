const { pool } = require("./db.js");

const Listings = {
    data: {
        async getHeroAll() {
            try {
                const result = await pool.query("SELECT id, title, description, price, tags, images, created_at FROM listings");
                return result.rows;
            } catch (err) {
                console.error("error in listings db data.getHeroAll()", err);
                throw err;
            }
        },
        async getFullData(id) {
            try {
                const result = await pool.query("SELECT * FROM listings WHERE id = $1", [id]);
                return result.rows[0] || null;
            } catch (err) {
                console.error("error in listings db data.getFullData()", err);
                throw err;
            }
        }
    },
    async create(
        title,
        description,
        price,
        seller_email,
        seller_phone,
        seller_id,
        tags,
        images,
        phone_show,
        email_show
    ) {
        const query = "INSERT INTO listings (title, description, price, seller_email, seller_phone, seller_id, tags, images, phone_show, email_show) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id";
        const values = [
            title,
            description,
            price,
            seller_email,
            seller_phone,
            seller_id,
            tags,
            images,
            phone_show,
            email_show
        ];

        try {
            const result = await pool.query(query, values);
            return result.rows[0] || null;
        } catch (err) {
            console.error("error in listings db create()", err);
            throw err;
        }
    },
    update: {
        async title(new_title, id) {
            const query = "UPDATE listings SET title = $1 WHERE id = $2 RETURNING *";
            const values = [new_title, id];
            try {
                const result = await pool.query(query, values);
                return result.rows[0] || null;
            } catch (err) {
                console.error("error in listings db update.title()", err);
                throw err;
            }
        },
        async desc(new_desc, id) {
            const query = "UPDATE listings SET description = $1 WHERE id = $2 RETURNING *";
            const values = [new_desc, id];
            try {
                const result = await pool.query(query, values);
                return result.rows[0] || null;
            } catch (err) {
                console.error("error in listings db update.desc()", err);
                throw err;
            }
        },
        async price(new_price, id) {
            const query = "UPDATE listings SET price = $1 WHERE id = $2 RETURNING *";
            const values = [new_price, id];
            try {
                const result = await pool.query(query, values);
                return result.rows[0] || null;
            } catch (err) {
                console.error("error in listings db update.price()", err);
                throw err;
            }
        },
        async emailShow(new_state, id) {
            const query = "UPDATE listings SET emailShow = $1 WHERE id = $2 RETURNING *";
            const values = [new_state, id];
            try {
                const result = await pool.query(query, values);
                return result.rows[0] || null;
            } catch (err) {
                console.error("error in listings db update.emailShow()", err);
                throw err;
            }
        },
        async phoneShow(new_state, id) {
            const query = "UPDATE listings SET phoneShow = $1 WHERE id = $2 RETURNING *";
            const values = [new_state, id];
            try {
                const result = await pool.query(query, values);
                return result.rows[0] || null;
            } catch (err) {
                console.error("error in listings db update.phoneShow()", err);
                throw err;
            }
        },
        async tags(new_tags, id) {
            const query = "UPDATE listings SET tags = $1 WHERE id = $2 RETURNING *";
            const values = [new_tags, id];
            try {
                const result = await pool.query(query, values);
                return result.rows[0] || null;
            } catch (err) {
                console.error("error in listings db update.tags()", err);
                throw err;
            }
        },
        async visibility(new_state, id) {
            const query = "UPDATE listings SET visibility = $1 WHERE id = $2 RETURNING *";
            const values = [new_state, id];
            try {
                const result = await pool.query(query, values);
                return result.rows[0] || null;
            } catch (err) {
                console.error("error in listings db update.visibility()", err);
                throw err;
            }
        }
    },
    danger: {
        async delete(id) {
            try {
                const result = await pool.query("DELETE FROM listings WHERE id = $1 RETURNING *", [id]);
                return result.rows[0] || null;
            } catch (err) {
                console.error("error in listings db danger.delete()", err);
                throw err;
            }
        }
    }
};

module.exports = Listings;