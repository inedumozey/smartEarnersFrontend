import styled from "styled-components";
const headerHeight = '50px';

// desktop view
const MainLayoutWrapper = styled.footer`
`

const Nav = styled.nav`
    width: 100%;
    height: ${headerHeight};
    color: #fff;
    background: ${({bg})=>bg};
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: .9rem;
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

const Logo = styled.div`
    width: 50px;
    height: ${headerHeight};
    cursor: pointer
`

const User = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.95rem;
    justify-content: space-between;
    background: ${({bg})=>bg};
    border-radius: 15px;
    padding: 0 3px;
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
    Logo,
    User,
    UserAction,
    Dashboard
};