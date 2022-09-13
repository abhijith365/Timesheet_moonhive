import axios from "axios";


const apiClient = axios.create({
    baseURL: "http://localhost:5678",
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
})

export default apiClient;