import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import { config} from '../../../config';
const { BACKEND_BASE_URL} = config;

// logout in action
export const getPlans= createAsyncThunk(
    'config/getPlans',
    async(data, {rejectWithValue})=>{
        try{
            const res = await axios.get(`${BACKEND_BASE_URL}/investment/get-all-plans`)
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
    plans: { isLoading: false, status: false, msg: '', data: []},
    // authorize: { status: false, type: 'none', msg: '' }
}

export const plansReducer = createSlice({
    name: 'plans',
    initialState,
    extraReducers: {
        // handleSign up
        [getPlans.pending]: (state)=>{
            state.plans.isLoading = true;
        },
        [getPlans.fulfilled]: (state, {payload})=>{
            state.plans.isLoading = false;
            state.plans.status = payload.status;
            state.plans.msg = payload.msg;
            state.plans.data = payload.data
        },
        [getPlans.rejected]: (state, {payload})=>{
            state.plans.isLoading = false;
            state.plans.status = payload.status;
            state.plans.msg = payload.msg;
        },    
    }
    
})

export default plansReducer.reducer