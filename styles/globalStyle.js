import styled, {createGlobalStyle} from "styled-components";
const LIGHT_THEM = '#fff'
const DARK_THEM = '#000'

const GlobalStyle = createGlobalStyle`
  *{
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