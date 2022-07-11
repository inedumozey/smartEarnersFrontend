import styled from "styled-components";
import { ScrollBar } from "../../styles/globalStyle";


const TopNav = styled.nav`

    width: 100%;
    height: 120px;
    color: #fff;
    background: var(--major-color-purest);
    display: flex;
    align-items: center;
    padding: 2px 30px;
    user-select: none;
    --webkit-user-select: none;


    .togglemenu-wrapper {
        display: none;

        &:hover{
            color: #fff;
        };
        
        @media (max-width: 920px){
            display: flex;
        }
    }

    .logo{
        width: 120px;
        height: 120px;
        display: flex;
        position: absolute;
        left: 30px;
        align-items: center;
        justify-content: center;
        
        @media (max-width: 920px){
            left: 50%;
            transform: translateX(-50%)
        }
    };

    .nav-btn {
        border-radius: 20px;
        padding: 10px;
        position: absolute;
        right: 30px;
        background: var(--bright-color);

        @media (max-width: 920px){
            display: none
        };

        a {
            font-weight: bold;
            padding: 5px;

            &: hover {
                opacity: .5
            }
        };

        .signup {
            color: var(--major-color-purest)
        }
    }
`

const MidNav = styled.nav`
    width: 100%;
    height: 70px;
    z-index: 1;
    position: ${({stick})=>stick ? 'fixed' : ''};
    top: ${({stick})=>stick ? 0 : ''};
    
    .active {
        color: red;
    }

    .top-mid-nav{
        height: 45px;
        padding: 0 30px;
        background: var(--major-color-purest);
        display: flex;
        justify-content: ${({stick})=>!stick ? 'center' : 'space-between'};
        align-items: center;

        .togglemenu-wrapper { 
            display: none;   
            &:hover{
                color: #fff;
            };
            
            @media (max-width: 920px){
                display: flex;
            }
        }

        .logo-midNav{
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;

            @media (max-width: 920px){
                position: absolute;
                left: 50%;
                transform: transalateX(-50%)
            };
        };

        .navLink {
            display: flex;
            color: #fff;

            a {
                padding: 5px;
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

            @media (max-width: 920px){
                display: none
            };
        };

        .nav-btn {
            border-radius: 20px;
            padding: 10px;
            height: 40px;
            background: var(--bright-color);;
        
            @media (max-width: 920px){
                display: none
            };

            a {
                font-weight: bold;
                padding: 5px;
        
                &: hover {
                    opacity: .5
                }
            };
        
            .signup {
                color: var(--major-color-purest);
            };
        }
        
    };

    .bottom-mid-nav {
        height 25px;
        padding: 0 20px;
        text-align: center;
        color: red;
        box-shadow: 2px 2px 5px #000;
        background: var(--major-color-faded);
    }
      
`
const MobileMenuRow1 = styled.div`
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
const MobileMenuRow2 = styled.div`
    height: calc(100% - 165px - 70px);
    overflow-y: auto;
    background: var(--major-color-deep);

    .active {
        color: red;
    }
    
    ${ScrollBar()}

    .navLink {
        padding-right: 20px;

        a {
            display: block;
            width: 100%;
        }

        .link {
            padding: 0;
            border: none;
            color: #fff;
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

        div {
            margin-top: 10px;
            padding: 8px 20px;
            display: block;
            color: #fff;
            border-bottom: 1px solid #aaa;
            font-size: .9rem !important;
            
            &:hover {
                opacity:.6
            }

            
        }
    }
`
const MobileMenuRow3 = styled.div`
    height: 70px;
    border-top: 1px solid var( --bright-color);

    #active {
        color: red;
    };

    .nav {
        height: 70%;
        display: flex;
        justify-content: center;
        align-items: center;

        .nav-btn {
            border-radius: 20px;
            padding: 10px;
            display: inline-block;
            color: #fff;
            height: 40px;
            background: var(--bright-color);

            a {
                font-weight: bold;
                padding: 5px;
        
                &: hover {
                    opacity: .5
                }
            };
        
            .signup {
                color: var(--major-color-purest);
            };
        }

    }
    
`


export {
    TopNav,
    MidNav,
    MobileMenuRow1,
    MobileMenuRow2,
    MobileMenuRow3,
}