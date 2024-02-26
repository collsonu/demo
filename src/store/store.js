import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/authSlice.js'
import userDetail from '../features/userDetailSlice.js'



const store = configureStore({
    reducer: {
        app: userDetail,
        auth: authReducer,
    }
})

export default store