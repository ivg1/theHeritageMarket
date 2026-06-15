import Auth from "../auth/auth";

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
            const token = await Auth.getToken();
            console.log(token);
            const response = await fetch(`${this.modUrl}/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": token
                },
                body: JSON.stringify(body ?? {})
            });
            return await response.json();
        },
        async update(id, body) {
            const response = await fetch(`${this.modUrl}/update?id=${encodeURIComponent(id)}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": token
                },
                body: JSON.stringify(body ?? {})
            });
            return await response.json();
        },
        async delete(id) {
            const response = await fetch(`${this.modUrl}/delete?id=${encodeURIComponent(id)}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": token
                },
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
            const token = await Auth.getToken();
            const response = await fetch(`${this.modUrl}/getNum`, {
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": token
                }
            });
            console.log(response);
            return await response.text();
        },
        async getDataByUsername(username) {
            const token = await Auth.getToken();
            const response = await fetch(`${this.modUrl}/getDataByUsername?username=${encodeURIComponent(username)}`, {
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": token
                }
            });
            return await response.json();
        },

        //new thing im doing rn, dont forget to finish
        async update(body) {
            const token = await Auth.getToken();
            const response = await fetch(`${this.modUrl}/update`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": token
                },
                body: JSON.stringify(body ?? {})
            });
            return await response.json();
        }
    },
    auth: {
        modUrl: `${url}/auth`,
        async signup(body) {
            const response = await fetch(`${this.modUrl}/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });
            
            if (!response.ok) throw new Error("SIGNUP FAILED");
            return await response.json();
        },
        async login(body) {
            const response = await fetch(`${this.modUrl}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });

            if (!response.ok) throw new Error("WRONG CREDENTIALS"); //geez, how could i have forgotten to add this???
            return await response.json();
        }
    },
    async uploadImage(image) {
        const formData = new FormData();
        formData.append("file", image);

        const response = await fetch(`${url}/upload`, {
            method: "POST",
            body: formData
        });

        console.log("status:", response.status);
        console.log(response.status);

        if (response.status !== 200) throw new Error("image upload failed");

        return await response.json();
    },
    async me() {
        const token = await Auth.getToken();
        const response = await fetch(`${url}/me`, {
            headers: {
                "Content-Type": "application/json",
                "x-access-token": token
            }
        });

        if (!response.ok) throw new Error("you seem to not exist mate");
        return await response.json();
    }
};

export default Server;