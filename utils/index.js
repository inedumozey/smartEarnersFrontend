import Cookies from 'js-cookie';
import {useRouter} from 'next/router'

const check = {

    redirectIfNotLoggedIn: (url)=>{
        const router = useRouter()
    
        if(!Cookies.get('accesstoken')) router.push(url)
    },

    isLoggedIn: ()=>{    
        if(Cookies.get('accesstoken')) return true
    },
    
    redirectIfUnVerified: (url)=>{
        const router = useRouter()
    
        if(Cookies.get('accesstoken') && Cookies.get('type') === 'unverified') router.push(url)
    },
    
    redirectIfNotAdmin: (url)=>{
        const router = useRouter()
    
        if(Cookies.get('accesstoken') && Cookies.get('type') !== 'admin') router.push(url)
    },

    redirectToAdmin: (url)=>{
        const router = useRouter()
    
        if(Cookies.get('accesstoken') && Cookies.get('type') === 'admin') router.push(url)
    },

    redirectToDashboard: (dashboard, admin)=>{
        const router = useRouter()
        
        if(Cookies.get('accesstoken')){
            Cookies.get('type') === 'admin' ? router.push(admin) : router.push(dashboard)
        }
    },
    
    redirectIfBlocked: (url)=>{
        const router = useRouter()
    
        if(Cookies.get('accesstoken') && Cookies.get('type') === 'blocked') router.push(url)
    },

    isAdmin: ()=>{
        if(Cookies.get('accesstoken') && Cookies.get('type') === 'admin') return true
    },

    isUnverified: ()=>{
        if(Cookies.get('accesstoken') && Cookies.get('type') === 'unverified') return true
    },

    isVerified: ()=>{
        if(Cookies.get('accesstoken') && Cookies.get('type') === 'verified') return true
    },

    isBlocked: ()=>{
        if(Cookies.get('accesstoken') && Cookies.get('type') === 'blocked') return true
    },
}

export default check