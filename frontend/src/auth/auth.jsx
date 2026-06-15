import Cookies from "js-cookie";

const Auth = {
    async storeToken(response) {
        Cookies.set("token", response.token, { expires: 7 });
        console.log("token cookie set");
    },
    async getToken() {
        return Cookies.get("token");
    },
    async deleteToken() {
        Cookies.remove("token");
    },
    async loginState() {
        const token = Cookies.get("token");
        if (token === undefined) return false;
        return true;
    },
    /* (NOT USED, instead i use Data.me() now to get username)
    async storeUsername(username) {
        Cookies.set("username", username, { expires: 7 });
        console.log("username cookie set");
    },
    async getUsername() {
        return Cookies.get("username");
    },
    async deleteUsernameCookie() {
        Cookies.remove("username");
    }
    */
}

export default Auth;