import styled from "styled-components";
import { ScrollBar } from "../../../styles/globalStyle";

const SideMenuRow1 = styled.div`
    height: 165px;
    border-bottom: 1px solid var( --bright-color);
    display: flex;
    justify-content: center;
    align-items: center;
    
    .logo{
        width: 140px;
        height: 140px;
        display: flex;
        align-items: center;
        justify-content: center;
    };
`
const SideMenuRow2 = styled.div`
    height: calc(100% - 165px - 70px);
    overflow-y: auto;
    background: var(--major-color-deep);
    
    ${ScrollBar()}

    .navLink {

        a {
            display: block;
            width: 100%;
            padding: 5px;
            display: flex;
            align-items: flex-end;
            font-size: 1.2rm;
            margin-bottom: 5px;
            color: #fff;

            div {
                padding: 5px 8px;
                display: block;
                font-size: 1rem;
                
                &:hover {
                    opacity:.6
                }
            }

            .icon{
                width: 30px;
                height: 30px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                padding: 18px;
                align-items: center;
            }
        }
    }
`
const SideMenuRow3 = styled.div`
    height: 70px;


    .nav {
        height: 70%;
        color: #fff;
    }
    
`
const SideMenuNavBtn = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center
`

export {
    SideMenuRow1,
    SideMenuRow2,
    SideMenuRow3,
    SideMenuNavBtn,
}