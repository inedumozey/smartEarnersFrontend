import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../components/auth/redux/auth';
import {GlobalStyle, ToggleBtn} from '../styles/globalStyle';
import axios from 'axios';
axios.defaults.withCredentials = true;
import { useToggle } from '@mozeyinedu/hooks-lab';
import {MdLightMode} from 'react-icons/md'
import Layouts from '../layouts/index'
import MainLayout from '../layouts/mainLayout/MainLayout';
import RoutingLoader from '../loader/RoutingLoader';
import { useState, useLayoutEffect } from 'react';
import ScreenLoader from '../loader/ScreenLoader';
import Head from 'next/head'
import { store } from '../redux/store';

function MyApp({ Component, pageProps }) {
  const { toggle, toggleState } = useToggle(); 
  const [loading, setLoading] = useState(true);

  
  useLayoutEffect(()=>{
    setLoading(true);

    setTimeout(()=>{
      setLoading(false)
    }, 1000)
    
  }, [])

  return (
    <>
      <Head>
        <title>SmartEarners</title>
        {/* <link rel="stylesheet" href="/logo.png.ico" /> */}
      </Head>

      {
        loading ? <ScreenLoader /> : 
        <>
          <GlobalStyle toggleState={toggleState}/>
            <RoutingLoader />
            <ToggleBtn toggleState={toggleState} onClick={toggle}>
              <MdLightMode style={{color: toggleState ? '#fff' : '#000'}} />
            </ToggleBtn>
            
            <Provider store={store}>
              <MainLayout>
                <Layouts>
                  <Component {...pageProps} />
                </Layouts>
              </MainLayout>
          </Provider>
        </>
      }
    </>
  )
}

export default MyApp
