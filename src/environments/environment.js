import Cookies from "js-cookie";

export default {
    baseUrl: "http://localhost:8080",
    accessToken: "Bearer " + Cookies.get("access_token"),
};