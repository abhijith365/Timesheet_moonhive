import client from "../apiClient";

// user login 
export const userLogin = async (body) => {
    return await client.post('/api/user/login', { body })
}

// user regestration 
export const userReg = async (body) => {
    return await client.post('/api/user/signUp', { body })
}

// user logout
export const userLogout = async () => {
    const access_token = localStorage.getItem("access_token")
    const config = { headers: { "Authorization": `${access_token}` } }
    return await client.get('/api/user/logout', config)
}

// verfi user 
export const verfiUser = async () => {
    const access_token = localStorage.getItem("access_token")
    const config = { headers: { "Authorization": `${access_token}` } }
    return await client.get('/api/user/verify', config)
}

// create Task 
export const createTs = async (body) => {
    const access_token = localStorage.getItem("access_token")
    const config = { headers: { "Authorization": `${access_token}` } }
    const res = await client.post('/api/user/task', { body }, config)
    return res
}

// get all tasks
export const getAllTask = async () => {
    const access_token = localStorage.getItem("access_token")
    const config = { headers: { "Authorization": `${access_token}` } }
    const res = await client.get('/api/user/task', config)
    return res
}

