import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../components/auth/redux/auth';

// redux store
export const store = configureStore({
    reducer: {
        auth: authReducer
    }
})