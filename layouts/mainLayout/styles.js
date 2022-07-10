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
    background: linear-gradient(to right, #00415d, #2d0b00);
    padding: 100px 0 30;
    position: absolute;
    bottom: 0;
    font-size: 13px;
    line-height: 20px;

    & .row {
        width: 85%;
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: space-between;

    }
    & .col {
        flex-basis: 25%;
        padding: 10px;
    }
    & .logo{
        width: 80px;
        margin-bottom: 30px;

    }
    & .col h3 {
        width: fit-content;
        margin-bottom: 40px;
        position: relative;

    }
    & .email-id{
        width: fit-content;
        border-bottom: 1px solid #ccc;
        margin: 20px 0;
    }
    ul li{
        list-style: none;
        margin-bottom: 12px;

    }
    ul li a {
        text-decoration: none;
        color: white;
    }
    & form{
        padding-bottom: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
        margin-bottom: 50px;
    }

    & form label{
        font-size: 18px;
        margin-right: 10px;
    }
    & form input{
        width: 100%;
        background: transparent;
        color: #ccc;
        border: 0;
        outline: none;

    }

    & form button {
        background: transparent;
        border: 0;
        outline: none;
        cursor: pointer;
        color: white;
    }
    .social-icons svg{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        text-align: center;
        line-height: 40px;
        margin-right: 15px;
    }
`

const Nav = styled.nav`
    width: 100%;
    height: max-content;
    position: fixed;
    z-index: 2453;
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
    
     height: max-content;
    
     .bottom-nav-container{
        width: 80%;
        margin: 0 auto;
        display: flex;
        background-color:linear-gradient(to right, #00415d, #a8bec7);
        justify-content:space-between;
        align-content: center;

        span.logo {
            cursor: pointer;
          
        }

        div.user {
            width: 60%;
            display: flex;
            align-items: center;
            
            /* background: ${({bg})=>bg}; */
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