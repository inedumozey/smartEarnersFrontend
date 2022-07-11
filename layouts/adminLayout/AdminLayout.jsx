import Cookies from 'js-cookie'
import check from '../../utils'
import { Main, Header, Footer } from '../../styles/globalStyle';
import GlobalFooter_ from '../GlobalFooter';


export default function AdminLayout({children}) {
  // check.redirectIfNotLoggedIn('/signin')
  // check.redirectIfNotAdmin('/dashboard')

  return (
    <>
    {
        Cookies.get('type') === 'admin' ?
        (
          <div style={{color: 'red', padding: '5px', border: '1px solid gold'}}>{Cookies.get('type')}
          </div>
        ):
        (
          <div style={{color: 'red', padding: '5px', border: '1px solid gold'}}>Your Account is {Cookies.get('type')}
          </div>
        )

    }

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
