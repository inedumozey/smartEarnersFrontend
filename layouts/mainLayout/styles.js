import styled from "styled-components";
const headerHeight = '150px';

// desktop view
const MainLayoutWrapper = styled.footer`
`

const Main = styled.main`
    width: 100%;
    padding-bottom: 170px;
`
const Footer = styled.footer`
    width: 100%;
    min-height: 150px;
    color: #fff;
    background: ${({bg})=>bg};
    padding: 20px;
    position: absolute;
    bottom: 0;
`

const Nav = styled.nav`
    width: 100%;
    height: max-content;
    color: #fff;
    background: ${({bg})=>bg};
    display: flex;
    flex-direction:column;
    justify-content: center;
    font-size: .9rem; 
`

const TopNav = styled.div`
    background-color:var(--light-color);
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    color: var(--major-color-purest);
    flex: 1;
    .top-nav-container{
            width: 80%;
            margin: 0 auto;
            display: flex;
            justify-content:space-between;
            align-content: center;
        ul {
            display: flex;
            justify-content: space-between;
            width: 12%;
            padding: 10px;
            border-bottom: 3px solid var(--bright-color);
        }
        span {
            display: flex;
            justify-content:space-between;
            align-content: center;
            align-items: center ;
            padding: 10px;
            width: 17%;
            border-bottom: 1px solid var(--bright-color);
            
        }
    }
    
`
const BottomNav = styled.div`
     background-color:var(--major-color-purest);
     height: max-content;
    
     .bottom-nav-container{
        width: 80%;
        margin: 0 auto;
        display: flex;
       
        justify-content:space-between;
        align-content: center;

        span.logo {
            cursor: pointer;
          
        }

        div.user {
            width: 60%;
            display: flex;
            align-items: center;
            
            background: ${({bg})=>bg};
        }
        .bottom-nav-tabs{
            display: flex;
            flex: 1;
           font-size: 1.2rem;
           font-weight: 600;
            justify-content: space-between;

            & button{
                border: none;
                width: 130px;
                height: 40px;
                border-radius: 30px;
                font-weight: 600;
                font-size: 1.2rem;
                color: var(--light-color);
            }
            & button.signin{
                
                background: var(--bright-color);
                   
            }

            & button.signup{
                background: var(--medium-color);
        }
    }
     }

`


const User = styled.div`
   
    
     /*font-size: 0.95rem;
    justify-content: space-between;
   
    border-radius: 15px;
    padding: 0 3px; */

    
`

const UserAction = styled.a`
    padding: 5px 5px;
    margin-left: 5px;
`
const Dashboard = styled.a`
    padding: 5px;
`

export {
    Nav,
    Main,
    Footer,
    MainLayoutWrapper,
    User,
    UserAction,
    Dashboard,
    TopNav,
    BottomNav,
};