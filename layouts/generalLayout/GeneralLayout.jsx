import React from 'react'
import { Main, Header, Footer } from '../../styles/globalStyle'
import Header_ from './Header.jsx';
import GlobalFooter_ from '../GlobalFooter';



export default function GeneralLayout({children}) {
  return (
    <>
    <Header headerHeight="200px">
      <Header_ />
    </Header>

    <Main height={{headerHeight: '120px', footerHeight: '50px'}}>
      {children}
    </Main>

    <Footer footerHeight='50px'>
      <GlobalFooter_ />
    </Footer>
      
    </>
  )
}
