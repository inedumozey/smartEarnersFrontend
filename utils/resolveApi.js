import axios from 'axios';
import Cookies from 'js-cookie';
import { BACKEND_BASE_URL } from './config';


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