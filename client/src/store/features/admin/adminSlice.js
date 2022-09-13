import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { verfiAdmin } from "../../../api/admin/admin.api";

let initialState = {
    loading: 'false',
    data: {},
    error: '',
}

export const adminCheckAuth = createAsyncThunk('admin/check', async () => {
    let res = await verfiAdmin()
    return res.data
})



const checkUserSlice = createSlice({
    name: 'admin',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(adminCheckAuth.pending, state => { state.loading = true })
        builder.addCase(adminCheckAuth.rejected, (state, action) => { state.loading = false, state.data = '', state.error = action.error.message })
        builder.addCase(adminCheckAuth.fulfilled, (state, action) => { state.loading = false, state.data = action.payload })

    }
})

export default checkUserSlice.reducer