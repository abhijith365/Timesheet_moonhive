import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { verfiUser } from "../../../api/user/user.api";

let initialState = {
    loading: 'false',
    data: {},
    error: '',
    auth: false
}

export const checkAuth = createAsyncThunk('checkUser/check', async () => {
    let res = await verfiUser()
    return res.data
})

const checkUserSlice = createSlice({
    name: 'checkUser',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(checkAuth.pending, state => { state.loading = true })
        builder.addCase(checkAuth.rejected, state => { state.loading = false })
        builder.addCase(checkAuth.fulfilled, (state, action) => { state.loading = false, state.auth = true, state.data = action.payload })
    }
})

export default checkUserSlice.reducer
