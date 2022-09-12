import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { userLogin } from "../../../api/user/user.api";

const initialState = {
    loading: false,
    data: [],
    error: ''
}

export const fetchUser = createAsyncThunk('user/fetchUser', async (body) => {

    const data = await userLogin(body)
    console.log(data.data)
    return data.data

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