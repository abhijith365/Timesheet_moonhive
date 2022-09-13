import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { adminLogin } from "../../../api/admin/admin.api";


const initialState = {
    loading: false,
    data: {},
    error: ''
}

export const fetchAdmin = createAsyncThunk('admin/fetchAdmin', async (body) => {

    const data = await adminLogin(body)
    if (data.data.token) { localStorage.setItem('access_token', data.data.token) }
    return data.data

})

const adminLoginSlice = createSlice({
    name: 'admin',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchAdmin.pending, state => {
            state.loading = true,
                state.data = [],
                state.error = ''
        })
        builder.addCase(fetchAdmin.fulfilled, (state, action) => {
            state.loading = false,
                state.data = action.payload,
                state.error = ''
        })
        builder.addCase(fetchAdmin.rejected, (state, action) => {
            state.loading = false,
                state.data = [],
                state.error = action.error.message
        })
    }
})

export default adminLoginSlice.reducer