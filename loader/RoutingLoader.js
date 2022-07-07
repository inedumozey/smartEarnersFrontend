import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ScreenLoader from './ScreenLoader';

const UnsplashScreen =()=>{

    const router = useRouter()
    const [loading, setLoading] = useState(false)
  
    const handleChangeStart =(url)=> setLoading(true);
    const handleChangeComplete =(url)=>setTimeout(()=> setLoading(false), 1000)
    
    useEffect(()=>{
      router.events.on('routeChangeStart', handleChangeStart)
  
      router.events.on('routeChangeComplete', handleChangeComplete);
  
      router.events.on('routeChangeError', handleChangeComplete);
  
      return ()=>{
        router.events.off('routeChangeStart', handleChangeStart)
  
        router.events.off('routeChangeComplete', handleChangeComplete);
  
        router.events.off('routeChangeError', handleChangeComplete);
      }
    }, []);
    
    return (
      loading ? <ScreenLoader /> : ''
      
    )
}

export default UnsplashScreen
