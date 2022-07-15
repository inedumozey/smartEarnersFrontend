import { Provider } from 'react-redux';
import {GlobalStyle, ToggleBtn} from '../styles/globalStyle';
import axios from 'axios';
import { useToggle } from '@mozeyinedu/hooks-lab';
import {MdLightMode} from 'react-icons/md'
import Layouts from '../layouts/index'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Head from 'next/head'
import { store } from '../redux/store';
axios.defaults.withCredentials = true;
import {resolveApi} from '../utils/resolveApi'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'
import Preloader from '../loaders/Preloader';

function MyApp({ Component, pageProps }) {

  resolveApi.generateAccesstoken()
  
  const router = useRouter()
  const { toggle, toggleState } = useToggle(); 
  const [loading, setLoading] = useState(true);

  const handleChangeStart =(url)=> {
      NProgress.start()
  };
  const handleChangeComplete =(url)=>{
      setTimeout(()=> {
          NProgress.done();
      }, 1000)
  }
    
  useEffect(()=>{
      setLoading(true)
      setTimeout(()=> {
        setLoading(false)
    }, 2000)
      router.events.on('routeChangeStart', handleChangeStart)
      router.events.on('routeChangeComplete', handleChangeComplete);
      router.events.on('routeChangeError', handleChangeComplete);

      return ()=>{
          router.events.off('routeChangeStart', handleChangeStart)
          router.events.off('routeChangeComplete', handleChangeComplete);
          router.events.off('routeChangeError', handleChangeComplete);
      }
  }, [])

  return (
    <Provider store={store}>
      <Head>
        <title>SmartEarners</title>
      </Head>

      <GlobalStyle toggleState={toggleState}/>
      <ToggleBtn toggleState={toggleState} onClick={toggle}>
        <MdLightMode style={{color: toggleState ? '#fff' : '#000'}} />
      </ToggleBtn>
      
      <Layouts toggleState={toggleState}>
          <Component {...pageProps} />
      </Layouts>


      {/* {
        loading ? <Preloader /> : 
        (
          <>
            <GlobalStyle toggleState={toggleState}/>
            <ToggleBtn toggleState={toggleState} onClick={toggle}>
              <MdLightMode style={{color: toggleState ? '#fff' : '#000'}} />
            </ToggleBtn>
            
            <Layouts toggleState={toggleState}>
                <Component {...pageProps} />
            </Layouts>
          </>
        )
      } */}
    </Provider>
  )
}

export default MyApp
