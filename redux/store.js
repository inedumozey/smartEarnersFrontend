import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth';
import configReducer from './config/config';
import plansReducer from './investmentPlans/investmentPlans';
import testimonialReducer from './testimonials/testimonials';

// redux store
export const store = configureStore({
    reducer: {
        auth: authReducer,
        config: configReducer,
        plans: plansReducer,
        testimonial: testimonialReducer,
    }
})