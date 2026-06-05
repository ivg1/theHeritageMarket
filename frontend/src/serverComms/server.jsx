
const url = "http://192.168.10.131:3000";

export const Server = {
    listings: {
        modUrl: `${url}/listings`,
        async getOne(id) {
            const response = await fetch(`${this.modUrl}/read?id=${encodeURIComponent(id)}`);
            return await response.json();
        },
        async getAll() {
            const response = await fetch(`${this.modUrl}/getAll`);
            const result = await response.json();
            console.log(result);
            return result;
        },
        async create(body) {
            const response = await fetch(`${this.modUrl}/create`, {
                method: "POST",
                body: JSON.stringify(body ?? {})
            });
            return await response.json();
        },
        async update(id, body) {
            const response = await fetch(`${this.modUrl}/update?id=${encodeURIComponent(id)}`, {
                method: "POST",
                body: JSON.stringify(body ?? {})
            });
            return await response.json();
        },
        async delete(id) {
            const response = await fetch(`${this.modUrl}/delete?id=${encodeURIComponent(id)}`, {
                method: "POST",
                //todo: add a body with username and pass or something to see if actual and not attack
            });
            return await response.json();
        },
    },
    users: {
        modUrl: `${url}/users`,
        async getData(id) {
            const response = await fetch(`${this.modUrl}/getById?id=${encodeURIComponent(id)}`);
            return await response.json();
        },
        async numUsers() {
            const response = await fetch(`${this.modUrl}/getNum`);
            return await response.text();
        },
        async create(body) {
            const response = await fetch(`${this.modUrl}/create`, {
                method: "POST",
                body: JSON.stringify(body)
            });
            return await response.json();
        }
    }
};

export default Server;