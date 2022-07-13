import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';
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
            if(err.response.data){
                return rejectWithValue({status: false, msg: err.response.data.msg});
            }
            else{
                return rejectWithValue({status: false, msg: err.message});
            }
        }
    }
)

// sign in action
export const handleSignin= createAsyncThunk(
    'auth/signin',
    async(data, {rejectWithValue})=>{
        try{
            const res = await axios.post(`${BACKEND_BASE_URL}/auth/signin`, data);
            return res.data
        }
        catch(err){
            if(err.response.data){
                return rejectWithValue({status: false, msg: err.response.data.msg});
            }
            else{
                return rejectWithValue({status: false, msg: err.message});
            }
        }
    }
)

// logout in action
export const logout= createAsyncThunk(
    'auth/logout',
    async(data, {rejectWithValue})=>{
        try{
            const res = await axios.get(`${BACKEND_BASE_URL}/auth/logout`)
            return res.data
        }
        catch(err){
            if(err.response.data){
                return rejectWithValue({status: false, msg: err.response.data.msg});
            }
            else{
                return rejectWithValue({status: false, msg: err.message});
            }
        }
    }
)

// regenerate accesstoken using the refreshtoken in the cookies
export const generateAccesstoken = createAsyncThunk(
    'auth/generateAccesstoken',
    async(arg)=>{
        try{
            if(Cookies.get('refreshtoken')){
                const res= await axios.get(`${BACKEND_BASE_URL}/auth/generate-accesstoken`, {
                    headers: {
                        "Authorization": `Bearer ${Cookies.get('refreshtoken')}`
                    }
                })
                return res.data
            }
        }
        catch(err){
            if(err.response.data){
                return rejectWithValue({status: false, msg: err.response.data.msg});
            }
            else{
                return rejectWithValue({status: false, msg: err.message});
            }
        }
    }
)



const initialState = {
    signup: { isLoading: false, status: false, msg: ''},
    signin: { isLoading: false, status: false, msg: ''},
    // authorize: { status: false, type: 'none', msg: '' }
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
            state.plans.isLoading = false;
            if(payload){
                state.plans.status = payload.status;
                state.plans.msg = payload.msg;
                
            }else{
                // to get rid of next js server error
                state.plans.status = false;
                state.plans.msg = 'Error occured';
            }
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
            state.plans.isLoading = false;
            if(payload){
                state.plans.status = payload.status;
                state.plans.msg = payload.msg;

            }else{
                // to get rid of next js server error
                state.plans.status = false;
                state.plans.msg = 'Error occured';
            }
        },
    }
    
})

export default authReducer.reducer