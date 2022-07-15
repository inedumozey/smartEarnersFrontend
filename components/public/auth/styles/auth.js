import styled from "styled-components";
const BRAND_COLOR_A = 'rgb(0, 65, 93)'
const BRAND_COLOR_B = 'rgb(241, 173, 0)'
const BRAND_COLOR_C = 'rgb(234 239 239)';

export const AuthWrapper = styled.div`
    width: 95vw;
    max-width: 500px;
    margin: 30px auto 100px auto;
`
export const Form = styled.form`
    width: 100%;
    background: ${BRAND_COLOR_C};
    padding: 5px 80px 40px 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 5px;
    box-shadow: 1px 1px 3px #aaa, -1px -1px 3px #aaa;
`

export const Title = styled.h1`
    color: ${BRAND_COLOR_A};
    text-align: center;
    margin: 10px 0 0 0;
`

export const SubTitle = styled.div`
    color: ${BRAND_COLOR_A};
    font-size: 1rem;
    text-align: center;
    line-height: 1.2rem;
    margin-bottom: ${({bottomMargin})=>bottomMargin}
`
export const InputWrapper = styled.div`
    width: 100%;
    height: 45px;
    margin-bottom: 25px;
    position: relative;
    
    
    input {
        border: 1px solid ${BRAND_COLOR_A};
        padding: 12px 30px 12px 30px;
        height: 100%;
        width: 100%;
        display: block;
        border-radius: 8px;
        color: ${BRAND_COLOR_A};
        font-size: .9rem; 
    }

    input: focus{
        outline: none
    }

    input[type="submit"]{
        border-radius: 20px;
        color: #fff;
        border: none;
        font-size: 1rem;
        font-weight: bold;
        cursor: pointer;
        background: ${BRAND_COLOR_B};
    }
`

export const InputIcon = styled.div`
    position: absolute;
    padding: 3px;
    width: 30px;
    z-index: 1;
    bottom: 0;
    left: ${({left})=>left};
    right: ${({right})=>right};
    font-size: 1.1rem;
    color: ${BRAND_COLOR_A};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

export const AuthLink = styled.a`
    color: ${BRAND_COLOR_B};
`

export const Error = styled.small`
    background: rgb(243 100 69 / 37%);
    color: rgb(219 70 20);
    border: 1px solid rgb(219 70 20);
    padding: 10px;
    text-align: center;
    font-style: italic;
    position: relative;
    width: 100%;
    margin-bottom: 5px;
    border-radius: 8px;
`

export const Success = styled.small`
    background: rgb(99 227 174 / 43%);
    color: rgb(4 72 53);
    border: 1px solid rgb(4 72 53);
    padding: 10px;
    text-align: center;
    font-style: italic;
    position: relative;
    width: 100%;
    margin-bottom: 5px;
    border-radius: 8px;
`
export const Close = styled.small`
    right: 2px;
    top: 2px;
    width: 16px;
    height: 16px;
    display: flex;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    font-size: .8rem;
    opacity: .5;
    position: absolute;
`