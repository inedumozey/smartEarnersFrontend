import axios from 'axios';
import Cookies from 'js-cookie';
import {config} from '../config'
const {BACKEND_BASE_URL} = config;

const resolveApi = {
    generateAccesstoken: ()=>{
        if(Cookies.get('refreshtoken')){
            axios.get(`${BACKEND_BASE_URL}/auth/generate-accesstoken`, {
                headers: {
                    "Authorization": `Bearer ${Cookies.get('refreshtoken')}`
                }
            }, (err)=>{

            })
        }
    }
}

export {resolveApi}