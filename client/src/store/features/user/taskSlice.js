import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { createTs, getAllTask } from '../../../api/user/user.api'


const initialState = {
    loading: false,
    data: [],
    allData: [],
    error: ''
}

export const fetchTask = createAsyncThunk('task/add', async (body) => {
    const res = await createTs(body)
    return res.data
})
export const fetchAllTask = createAsyncThunk('task/getAll', async () => {
    const res = await getAllTask()
    return res.data
})

const taskSlice = createSlice({
    name: 'task',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchTask.pending, (state) => { state.data = '', state.error = '', state.loading = true })
        builder.addCase(fetchTask.rejected, (state, action) => { state.data = '', state.error = action.error.message, state.loading = false })
        builder.addCase(fetchTask.fulfilled, (state, action) => { state.data = action.payload, state.error = '', state.loading = false })
        builder.addCase(fetchAllTask.pending, (state) => { state.data = '', state.error = '', state.loading = true })
        builder.addCase(fetchAllTask.rejected, (state, action) => { state.data = '', state.error = action.error.message, state.loading = false })
        builder.addCase(fetchAllTask.fulfilled, (state, action) => { state.allData = action.payload, state.error = '', state.loading = false })
    }
})

export default taskSlice.reducer