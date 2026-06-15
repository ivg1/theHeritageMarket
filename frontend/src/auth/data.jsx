import Server from "../serverComms/server";

const Data = {
    async me() {
        const storedMe = sessionStorage.getItem("me");

        if (storedMe) {
            try {
                return JSON.parse(storedMe);
            } catch (err) {
                console.log("creating storedMe in sessionStorage");
                sessionStorage.removeItem("me");
            }
        }

        const me = await Server.me();
        sessionStorage.setItem("me", JSON.stringify(me));

        return me;
    }
}

export default Data;