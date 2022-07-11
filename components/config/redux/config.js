import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import { config} from '../../../config';
const { BACKEND_BASE_URL} = config;

// logout in action
export const getConfig= createAsyncThunk(
    'config/getConfig',
    async(data, {rejectWithValue})=>{
        try{
            const res = await axios.get(`${BACKEND_BASE_URL}/config/get`)
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



const initialState = {
    config: { isLoading: true, status: false, msg: '', data: {}},
    // authorize: { status: false, type: 'none', msg: '' }
}

export const configReducer = createSlice({
    name: 'config',
    initialState,
    extraReducers: {
        // handleSign up
        [getConfig.pending]: (state)=>{
            state.config.isLoading = true;
        },
        [getConfig.fulfilled]: (state, {payload})=>{
            state.config.isLoading = false;
            state.config.status = payload.status;
            state.config.msg = payload.msg;
            state.config.data = {...state.config.data, ...payload.data}
        },
        [getConfig.rejected]: (state, {payload})=>{
            state.config.isLoading = false;
            state.config.status = payload.status;
            state.config.msg = payload.msg;
        },    
    }
    
})

export default configReducer.reducer