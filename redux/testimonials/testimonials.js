import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';
import { BACKEND_BASE_URL } from '../../utils/config';


export const getSelectedTestimonials= createAsyncThunk(
    'testimonial/getSelectedTestimonials',
    async(data, {rejectWithValue})=>{
        try{
            const res = await axios.get(`${BACKEND_BASE_URL}/testimonials/get-selected`)
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

export const getAllTestimonials= createAsyncThunk(
    'testimonial/getAllTestimonials',
    async(data, {rejectWithValue})=>{
        try{
            const res = await axios.get(`${BACKEND_BASE_URL}/testimonials/get-all`)
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

export const getOneTestimonial= createAsyncThunk(
    'testimonial/getOneTestimonial',
    async(id, {rejectWithValue})=>{
        try{
            const res = await axios.get(`${BACKEND_BASE_URL}/testimonials/get${id}`)
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

export const remove= createAsyncThunk(
    'testimonial/remove',
    async(id, {rejectWithValue})=>{
        try{
            const res = await axios.put(`${BACKEND_BASE_URL}/testimonials/restrict/${id}`, {
                header: {
                    "Authorization": `Bearer ${Cookies.get('accesstoken')}`
                }
            });
            
            console.log(res.data)
            return res.data
        }
        catch(err){
            
            if(err.response.data){
                console.log(err.response.data)
                return rejectWithValue({status: false, msg: err.response.data.msg});
            }
            else{
                console.log(err.message)
                return rejectWithValue({status: false, msg: err.message});
            }
        }
    }
)


const initialState = {
    allTestimonials: { isLoading: false, status: false, msg: '', data:[]},
    selectedTestimonials: { isLoading: false, status: false, msg: '', data:[]},
    oneTestimonials: { isLoading: false, status: false, msg: '', data:{}},
}

export const testimonialReducer = createSlice({
    name: 'plans',
    initialState,
    extraReducers: {
        // get all testimonials
        [getAllTestimonials.pending]: (state)=>{
            state.allTestimonials.isLoading = true;
        },
        [getAllTestimonials.fulfilled]: (state, {payload})=>{
            state.allTestimonials.isLoading = false;
            state.allTestimonials.status = payload.status;
            state.allTestimonials.msg = payload.msg;
            state.allTestimonials.data = payload.data
        },
        [getAllTestimonials.rejected]: (state, {payload})=>{
            state.allTestimonials.isLoading = false;
            if(payload){
                state.allTestimonials.status = payload.status;
                state.allTestimonials.msg = payload.msg;
            }else{
                // to get rid of next js server error
                state.allTestimonials.status = false;
                state.allTestimonials.msg = 'Error occured';
            }
        },
        
        // get selected testimonials
        [getSelectedTestimonials.pending]: (state)=>{
            state.selectedTestimonials.isLoading = true;
        },
        [getSelectedTestimonials.fulfilled]: (state, {payload})=>{
            state.selectedTestimonials.isLoading = false;
            state.selectedTestimonials.status = payload.status;
            state.selectedTestimonials.msg = payload.msg;
            state.selectedTestimonials.data = payload.data
        },
        [getSelectedTestimonials.rejected]: (state, {payload})=>{
            state.selectedTestimonials.isLoading = false;
            if(payload){
                state.selectedTestimonials.status = payload.status;
                state.selectedTestimonials.msg = payload.msg;
            }else{
                // to get rid of next js server error
                state.selectedTestimonials.status = false;
                state.selectedTestimonials.msg = 'Error occured';
            }
        }, 
        
        // get one testimonial
        [getOneTestimonial.pending]: (state)=>{
            state.oneTestimonials.isLoading = true;
        },
        [getOneTestimonial.fulfilled]: (state, {payload})=>{
            state.oneTestimonials.isLoading = false;
            state.oneTestimonials.status = payload.status;
            state.oneTestimonials.msg = payload.msg;
            state.oneTestimonials.data = payload.data
        },
        [getOneTestimonial.rejected]: (state, {payload})=>{
            state.oneTestimonials.isLoading = false;
            if(payload){
                state.oneTestimonials.status = payload.status;
                state.oneTestimonials.msg = payload.msg;
            }else{
                // to get rid of next js server error
                state.oneTestimonials.status = false;
                state.oneTestimonials.msg = 'Error occured';
            }
        },

        // remove from view list
        [remove.pending]: (state)=>{
            state.allTestimonials.isLoading = true;
        },
        [remove.fulfilled]: (state, {payload})=>{
            state.allTestimonials.isLoading = false;

            // get the removed item, filter from selectedTestimonials
            // console.log(payload)
            
        },
        [remove.rejected]: (state, {payload})=>{
            state.allTestimonials.isLoading = false;
        },
        
    }
    
})

export default testimonialReducer.reducer