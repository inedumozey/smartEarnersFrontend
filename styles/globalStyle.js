import { style } from "@mui/system";
import styled, {createGlobalStyle, css} from "styled-components";
const LIGHT_THEM = '#fff'
const DARK_THEM = '#000'

const ScrollBar = ()=> css`
  &::-webkit-scrollbar-thumb {
    background-color: #F0F4F5;
    border-radius: 50px;
  }
  &::-webkit-scrollbar-track {
    background-color: #00415d9c;
  }
  &::-webkit-scrollbar-corner {
    background-color: #00415D30;
  }
  &::-webkit-scrollbar {
    width: .7rem;
    height: .7rem;
  }
  & {
    -ms-overflow-style: auto;
    scrollbar-color:#00415D30;
    scrollbar-width: thin;
  }
`

const GlobalStyle = createGlobalStyle`

  :root{
    --major-color-purest : #00415D;
    --major-color-30A: #00415D30;
    --major-color-deep: #03212e;
    --major-subtitle: #00415D98;
    --major-color-5A: #00415D05;
    --major-color : #134965
    
    --minor-color : #F0F4F5;
    --bright-color : #F1AD00;
    --medium-color: #A8BEC7;
    --light-color: #F5F5F5;
    --gray-color: #B6BFC3;
    --white-bg-color: #ffffff;
    --BRAND_COLOR_B: rgb(241, 173, 0);
    --BRAND_COLOR_A: rgb(0, 65, 93);
    --major-color-faded: #00415d9c;
  };

  *{
    list-style-type:none;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  body{
    transition: background .3s ease-in;
    background: ${({toggleState})=>toggleState ? LIGHT_THEM : DARK_THEM};
    color: ${({toggleState})=>toggleState ? "#000" : "#fff"};
    position: relative;
    min-height: 100vh;

    ${ScrollBar()}

  }

  a{
    color: inherit;
    text-decoration: none;
  }
`

const Header = styled.div`
  width: 100%;
  height: ${({headerHeight})=>headerHeight};
`
const Main = styled.div`
  width: 100%;
  min-height: ${({height})=>`calc(100vh - ${height.headerHeight} - ${height.footerHeight})`};
`
const Footer = styled.div`
  width: 100%;
  min-height: ${({footerHeight})=>footerHeight};
`

const MobileMenu = styled.div`
    background: rgba(0,0,0,.6);
    z-index: 1000000000;
    transition: all .6s;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    opacity: ${({show})=>show ? 1 : 0};
    visibility: ${({show})=>show ? 'visible' : 'hidden'};

    @media (min-width: 920px){
      display: none;
  }
`

const MobileMenuContainer = styled.div`
    background: var(--major-color-purest);
    transition: all .5s;
    transform: translateX(${({show})=>show ? 0 : '-150%'});
    position: fixed;
    top: ${({top})=>top};
    bottom: 0;
    width: ${({width})=>width};
    left: 0;

    .content{
      transition: all .4s;
      opacity: ${({show})=>show ? 1 : 0};
      visibility: ${({show})=>show ? 'visible' : 'hidden'};
      width: 100%;
      height: 100%;
    }
`

const ToggleMenu = styled.div`
    width: 40px;
    height: 40px;
    color: #aaa;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
`

const ToggleBtn = styled.div`
  position: fixed;
  width:17px;
  height:17px;
  right: 0;
  top: o;
  display:flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1000;
  border-radius: 5px;
  background: ${({toggleState})=>toggleState ? '#000' : '#fff'}
`
const SectionWrapper = styled.div`
  width: 100vw;
  min-height: 60vh;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;

  @media (max-width: 920px){
      flex-direction: column;
      align-items: space-between;
  }
`

const Section = styled.section`
  min-width: 300px;
  padding: 10px 20px;
  border: 1px solid red;
`
const SectionTitle = styled.h2`
  
`
const SectionSubTitle = styled.h4`
  
`
const SectionText= styled.div`
  
`

const Button = styled.div`
  border-radius: 20px;
  padding: 5px 20px;
  color: var(--major-color-purest);
  background: var(--bright-color);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  text-align: center;

  // &:before: {
  //   background: #c30;
  //   z-index: -1;
  //   transition: all 0.6s ease;
  //   width: 100%;
  //   height: 0%;
  //   position: absolute;
  //   top: 50%;
  //   left: 50%;
  //   transform: transalate(-50%; -50%) rotate(45deg);
  // }

  // &:hover:before {
  //   height: 500%;

  // }

  // &:hover {
  //   color: #fff;
  // }
`

const MainLayoutStyle = styled.div`
  width: 100vw;
  height: 100vh;
`





export {GlobalStyle,
  ToggleBtn,
  SectionWrapper,
  Header,
  Main,
  Footer,
  Button,
  MobileMenu,
  ToggleMenu,
  MobileMenuContainer,
  Section,
  SectionTitle,
  SectionSubTitle,
  SectionText,
  MainLayoutStyle,
  ScrollBar
};