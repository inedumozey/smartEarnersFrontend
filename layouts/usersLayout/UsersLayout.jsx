import { Main, Header, Footer } from '../../styles/globalStyle'
import GlobalFooter_ from '../../components/globalFooter/GlobalFooter';
import Header_ from '../../components/user/header/Header';


export default function DashboardLayout({children}) {

  return (
    <>
      <Header headerHeight="60px">
       <Header_ />
      </Header>

      <Main height={{headerHeight: '60px', footerHeight: '50px'}}>
        {children}
      </Main>

      <Footer footerHeight='50px'>
        <GlobalFooter_ />
      </Footer>
    </>
  )
}
