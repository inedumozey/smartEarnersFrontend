import styled, {createGlobalStyle} from "styled-components";
const LIGHT_THEM = '#fff'
const DARK_THEM = '#000'

// const MAJOR_COLOR =  || "00415D" || "00415D30%" || "00415D5%";
// const MINOR_COLOR = "#F0F4F5";
// const BRIGHT_COLOR = "#F1AD00";
// const MEDIUM_COLOR = "#A8BEC7";
// const LIGHT_COLOR = "F5F5F5";
// const GRAYISH_COLOR = "#B6BFC3"


const GlobalStyle = createGlobalStyle`

  :root{
    --major-color-purest : #00415D;
    --major-color-30A: #00415D30;
    --major-subtitle: #00415D98;
    --major-color-5A: #00415D05;
    --major-color : #134965
    --minor-color : #F0F4F5;
    --bright-color : #F1AD00;
    --medium-color: #A8BEC7;
    --light-color: #F5F5F5;
    --gray-color: #B6BFC3;
    --white-bg-color: #ffffff;
   
  }
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
    width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
  }

  a{
    color: inherit;
    text-decoration: none;
  }
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

export {GlobalStyle, ToggleBtn};