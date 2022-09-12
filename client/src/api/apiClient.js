import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:5678/"
})

export default apiClient;