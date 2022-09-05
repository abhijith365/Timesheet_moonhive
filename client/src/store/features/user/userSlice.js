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
            loading = true,
                data = [],
                error = ''
        })
    }
})

export default userSlice.reducer