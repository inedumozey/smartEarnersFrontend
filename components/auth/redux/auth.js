import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import { config} from '../../../config';
const { BACKEND_BASE_URL} = config;

// sign up action
export const handleSignup = createAsyncThunk(
    'auth/signup',
    async(data, {rejectWithValue})=>{
        try{
            const res = await axios.post(`${BACKEND_BASE_URL}/auth/signup`, data)
            return res.data
        }
        catch(err){
            return rejectWithValue(err.response.data);
        }
    }
)

// sign in action
export const handleSignin= createAsyncThunk(
    'auth/signin',
    async(data, {rejectWithValue})=>{
        try{
            const res = await axios.post(`${BACKEND_BASE_URL}/auth/signin`, data)
            return res.data
        }
        catch(err){
            return rejectWithValue(err.response.data);
        }
    }
)

const initialState = {
    signup: { isLoading: false, status: false, msg: ''},
    signin: { isLoading: false, status: false, msg: ''}
}

export const authReducer = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        // handleSign up
        [handleSignup.pending]: (state)=>{
            state.signup.isLoading = true;
        },
        [handleSignup.fulfilled]: (state, {payload})=>{
            state.signup.isLoading = false;
            state.signup.status = payload.status;
            state.signup.msg = payload.msg;
        },
        [handleSignup.rejected]: (state, {payload})=>{
            state.signup.isLoading = false;
            state.signup.status = payload.status;
            state.signup.msg = payload.msg;
        },


        // handleSign in
        [handleSignin.pending]: (state)=>{
            state.signin.isLoading = true;
        },
        [handleSignin.fulfilled]: (state, {payload})=>{
            state.signin.isLoading = false;
            state.signin.status = payload.status;
            state.signin.msg = payload.msg;
        },
        [handleSignin.rejected]: (state, {payload})=>{
            state.signin.isLoading = false;
            state.signin.status = payload.status;
            state.signin.msg = payload.msg;
        },


    }
    
})

export default authReducer.reducer