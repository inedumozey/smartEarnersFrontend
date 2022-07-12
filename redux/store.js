import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../components/auth/redux/auth';
import configReducer from '../components/config/redux/config';
import plansReducer from '../components/plans/redux/plans';

// redux store
export const store = configureStore({
    reducer: {
        auth: authReducer,
        config: configReducer,
        plans: plansReducer
    }
})