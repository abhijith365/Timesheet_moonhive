import axios from "axios";

// base url
const apiClient = axios.create({
    baseURL: "http://localhost:5678",
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
})

export default apiClient;