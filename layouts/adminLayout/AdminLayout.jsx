import GlobalFooter_ from '../../components/globalFooter/GlobalFooter';
import { Main, Header, Footer } from '../../styles/globalStyle';



export default function AdminLayout({children}) {

  return (
    <>
      <Header headerHeight="150px">
        header
      </Header>

      <Main height={{headerHeight: '150px', footerHeight: '50px'}}>
        {children}
      </Main>

      <Footer footerHeight='50px'>
        <GlobalFooter_ />
      </Footer>
      
    </>
  )
}
