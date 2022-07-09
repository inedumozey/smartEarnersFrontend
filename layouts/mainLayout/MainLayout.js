import { Main, MainLayoutWrapper } from './styles';
import Header from './Header';
import Footer_ from './Footer';

export default function MainLayout({children}){
    return (
      <MainLayoutWrapper >
        <Header />
        
        <Main>
            {children}
        </Main>
{/*   
        <Footer_ /> */}
        
      </MainLayoutWrapper>
    )
}