import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { allTasks, allUsers } from '../../../api/admin/admin.api'

const initialState = {
    loading: false,
    data: [],
    allUserData: [],
    weeklyData: [],
    monthlyData: [],
    allTasksData: [],
    error: ''
}

export const allUser = createAsyncThunk('admins/getAlluser', async () => {
    const res = await allUsers()
    return res.data
})

export const getWeeklyData = createAsyncThunk('admins/weeklyData', async () => {
    return
})

export const getMonthlyData = createAsyncThunk('admins/monthlyData', async () => {
    return
})
export const allUserTasks = createAsyncThunk('admins/allTasks', async () => {
    return await allTasks()
})

const dataSlice = createSlice({
    name: 'admins',
    initialState,
    extraReducers: (builder) => {
        // alluser reducer
        builder.addCase(allUser.pending, (state) => { state.allUserData = '', state.error = '', state.loading = true })
        builder.addCase(allUser.rejected, (state, action) => { state.allUserData = '', state.error = action.error.message, state.loading = false })
        builder.addCase(allUser.fulfilled, (state, action) => { state.allUserData = action.payload, state.error = '', state.loading = false })
        // week data
        builder.addCase(getWeeklyData.pending, (state) => { state.weeklyData = '', state.error = '', state.loading = true })
        builder.addCase(getWeeklyData.rejected, (state, action) => { state.weeklyData = '', state.error = action.error.message, state.loading = false })
        builder.addCase(getWeeklyData.fulfilled, (state, action) => { state.weeklyData = action.payload, state.error = '', state.loading = false })
        // alluser reducer
        builder.addCase(getMonthlyData.pending, (state) => { state.monthlyData = '', state.error = '', state.loading = true })
        builder.addCase(getMonthlyData.rejected, (state, action) => { state.monthlyData = '', state.error = action.error.message, state.loading = false })
        builder.addCase(getMonthlyData.fulfilled, (state, action) => { state.monthlyData = action.payload, state.error = '', state.loading = false })
        // all Task reducer
        builder.addCase(allUserTasks.pending, (state) => { state.allTasksData = '', state.error = '', state.loading = true })
        builder.addCase(allUserTasks.rejected, (state, action) => { state.allTasksData = '', state.error = action.error.message, state.loading = false })
        builder.addCase(allUserTasks.fulfilled, (state, action) => { state.allTasksData = action.payload, state.error = '', state.loading = false })
    }
})

export default dataSlice.reducer