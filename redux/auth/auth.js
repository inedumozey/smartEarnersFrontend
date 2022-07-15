import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';
import { BACKEND_BASE_URL } from '../../utils/config';


// sign up action
export const signup = createAsyncThunk(
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
export const signin= createAsyncThunk(
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
        [signup.pending]: (state)=>{
            state.signup.isLoading = true;
        },
        [signup.fulfilled]: (state, {payload})=>{
            state.signup.isLoading = false;
            state.signup.status = payload.status;
            state.signup.msg = payload.msg;
        },
        [signup.rejected]: (state, {payload})=>{
            state.signup.isLoading = false;
            if(payload){
                state.signup.status = payload.status;
                state.signup.msg = payload.msg;
                
            }else{
                // to get rid of next js server error
                state.signup.status = false;
                state.signup.msg = 'Error occured';
            }
        },


        // handleSign in
        [signin.pending]: (state)=>{
            state.signin.isLoading = true;
        },
        [signin.fulfilled]: (state, {payload})=>{
            state.signin.isLoading = false;
            state.signin.status = payload.status;
            state.signin.msg = payload.msg;
        },
        [signin.rejected]: (state, {payload})=>{
            state.signin.isLoading = false;
            if(payload){
                state.signin.status = payload.status;
                state.signin.msg = payload.msg;

            }else{
                // to get rid of next js server error
                state.signin.status = false;
                state.signin.msg = 'Error occured';
            }
        },
    }
    
})

export default authReducer.reducer