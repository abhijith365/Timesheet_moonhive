import client from "../apiClient";


export const adminapi = async () => {
    const res = await client.get("/api/admin")
    return res
}

// for login 
export const userLogin = async (body) => {
    return await client.post('/api/user/login', { body })
}

// user regestration 
export const userReg = async (body) => {
    return await client.post('/api/user/signUp', { body })
}