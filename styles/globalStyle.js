import { style } from "@mui/system";
import styled, {createGlobalStyle, css} from "styled-components";
const LIGHT_THEME = '#fff'
const DARK_THEME = '#000'

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
    --dark-theme: #000;
    --light-theme: #fff;
    --major-color-30A: #00415D30;
    --major-color-deep: #03212e;
    --major-subtitle: #00415D98;
    --major-color-5A: #00415D05;
    --major-color : #134965;

    --bottom-nav-color : #d9d9d9;
    
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
    background: ${({toggleState})=>toggleState ? 'var(--light-theme)' : 'var(--dark-theme)'};
    position: relative;
    min-height: 100vh;
    overflow-x: hidden;
    color: var(--major-color-purest);

    ${ScrollBar()}

    .swiper-button-next, .swiper-button-prev {
      color: var(--major-color-purest);
    };

  a {
      display: block;
      font-size: .9rem !important;
      
      &:hover {
          opacity:.6
      }
  };
  
  .link {
      padding: 0;
      border: none;
      color: #fff;
  }

  .active-icon{
    border: 2px solid var(--bright-color)
  }

  // side menu active link
  .side-menu-active-link{
    color: var(--bright-color);
  }
  .side-menu-active-icon{
    border: 2px solid var(--bright-color);
  }

  .active-link {
    color: var(--bright-color)
  }
  
  .active {
      position: relative;
      display: inline-block;

      &:before {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: -2px;
          content: '';
          width: 100%;
          height: 2px; 
          background: var(--bright-color);
      } 
  };

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

const ToggleMenu = styled.div`
    width: 30px;
    height: 40px;
    color: #aaa;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
`

const ToggleBtn = styled.div`
  position: fixed;
  width:17px;
  height:17px;
  right: 5px;
  top: 5px;
  display:flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 2000;
  border-radius: 5px;
  background: ${({toggleState})=>toggleState ? '#000' : '#fff'}
`

const SectionWrapper = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto 50px auto;
  justify-content: space-between;

  @media (max-width: 800px){
      flex-direction: column;
      align-items: space-between;
  }
`

const Section = styled.section`
  padding: 20px;
  text-align: center;
  margin: auto;
`
const SectionTitle = styled.h1`
  font-size: 2rem;
  margin: 10px;
  color: var(--major-color-purest);
`
const SectionSubTitle = styled.h4`
  color: var(--major-subtitle);
  font-size: 1.2rem;
`
const SectionText= styled.div`
  line-height: 2rem;
`

const Button = styled.button`
  border-radius: 25px;
  cursor: pointer;
  text-align: center;
  font-size: 1.2rem;
  padding: 10px 20px;
  border: none;
  color: var(--major-color-purest);
  font-weight: 600;
  background: var(--bright-color);
  box-shadow: 1px 1px 2px #aaa, -1px -1px 2px #aaa;
`

const MainLayoutStyle = styled.div`
  width: 100vw;
  height: 100vh;
`

const MovingInfoWrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    animation: slide 6s infinite;

    @keyframes slide {
      0%{
        left: 100%
      }

      100%{
        left: -100%
      }
    }
`
const LandCard = styled.div`
    
`
const CopyRight = styled.div`
  height: 30%;
  font-size: .8rem;
  text-align: center;
  color: #aaa
`

export {
  GlobalStyle,
  ToggleBtn,
  SectionWrapper,
  Header,
  Main,
  Footer,
  Button,
  ToggleMenu,
  Section,
  SectionTitle,
  SectionSubTitle,
  SectionText,
  MainLayoutStyle,
  ScrollBar,
  MovingInfoWrapper,
  LandCard,
  CopyRight
};