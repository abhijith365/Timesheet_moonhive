import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userLogout } from "../../../api/user/user.api";

const initialState = {
    user: false
}

export const logOut = createAsyncThunk('logout/logout', async () => {
    return await userLogout()
})

const logOutSlice = createSlice({
    name: 'logout',
    initialState,
    reducers: {
        reset: (state) => {
            state = undefined
        }
    },
    extraReducers: (builder) => {
        builder.addCase(logOut.fulfilled, (state) => state = undefined)
    }
})

export default logOutSlice.reducer
export const { reset } = logOutSlice.actions
