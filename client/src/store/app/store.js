import { configureStore } from '@reduxjs/toolkit'
import adminSlice from '../features/admin/adminSlice';
import checkUserslice from '../features/user/checkUserslice';
import regSlice from '../features/user/regSlice';
import taskSlice from '../features/user/taskSlice';
import userSlice from '../features/user/userSlice'
import adminLoginSlice from '../features/admin/loginSlice'
import dataSlice from '../features/admin/dataSlice';

const store = configureStore({
    reducer: {
        'user': userSlice,
        'userVerify': checkUserslice,
        'reg': regSlice,
        'task': taskSlice,
        'admin': adminSlice,
        'adminLogin': adminLoginSlice,
        'adminData': dataSlice
    }
})

export default store;