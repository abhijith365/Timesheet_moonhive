import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { userReg } from '../../../api/user/user.api'

const initialState = {
    user: false,
    error: '',
    loading: false
}


export const regAction = createAsyncThunk('reg/user', async (body) => {
    const res = await userReg(body)
    console.log(res)
    return res.data
})

const regSlice = createSlice({
    name: 'reg',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(regAction.pending, (state) => { state.user = '', state.error = '', state.loading = true })
        builder.addCase(regAction.rejected, (state, action) => { state.user = '', state.error = action.error.message, state.loading = false })
        builder.addCase(regAction.fulfilled, (state, action) => { state.user = action.payload, state.error = '', state.loading = false })

    }
})

export default regSlice.reducer
