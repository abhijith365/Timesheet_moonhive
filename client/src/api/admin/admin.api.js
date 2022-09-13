import client from "../apiClient";

export const verfiAdmin = async () => {
    const access_token = localStorage.getItem("access_token")
    const config = { headers: { "Authorization": `${access_token}` } }
    return await client.get('/api/admin/verify', config)
}

export const adminLogin = async (body) => {
    return await client.post('/api/admin/login', { body })

}

export const allTasks = async () => {
    const access_token = localStorage.getItem("access_token")
    const config = { headers: { "Authorization": `${access_token}` } }
    return await client.get('/api/admin/allTasks', config)
}
export const allUsers = async () => {
    const access_token = localStorage.getItem("access_token")
    const config = { headers: { "Authorization": `${access_token}` } }
    return await client.get('/api/admin/allUsers', config)
}