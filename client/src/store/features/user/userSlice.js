import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    data: [],
    error: ''
}

export const fetchUser = createAsyncThunk('user/fetchUser', () => {
    return
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, state => {
            state.loading = true,
                state.data = [],
                state.error = ''
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.loading = false,
                state.data = action.payload,
                state.error = ''
        })
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.loading = false,
                state.data = [],
                state.error = action.error.message
        })
    }
})

export default userSlice.reducer