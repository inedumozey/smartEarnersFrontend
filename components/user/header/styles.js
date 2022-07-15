import styled from 'styled-components'

const Header = styled.div`
    width: 100%;
    height: 60px;
    background: var(--major-color-purest);
    position: ${({stick, isMobile})=>stick && !isMobile ? 'fixed' : 'static'};
    color: #fff;
    z-index: 1000;
    padding: 0px 30px;
    color: #fff;
    user-select: none;
    --webkit-user-select: none;

    .logo {
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .current-page-name {
        display: flex;
        padding: 0 5px;
        border-radius: 20px;
        border-bottom: 3px solid #ccc;
        color: var(--bright-color);
        justify-content: space-between;
        align-items: center;
        font-size: 1.2rem;
        font-weight: 600;
    }

    .larger-screen-view {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .navLink {
            display: flex;

            .navLinkWrapper{
                margin: 0 4px;
            }
        }

        @media (max-width: 920px){
            display: none;
        }
    }

    .smaller-screen-view {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .toggle-menu {
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: flex-start;

            &:hover{
                opacity: .5;
            };
        }

        @media (min-width: 920px){
            display: none;
        }
    }

    .mobile-screen-view {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .bottom-nav{
        width: 100%;
        z-index: 1000;
        height: 60px;
        bottom: 0;
        left: 0;
        right: 0;
        font-weight: 400;
        color: var(--major-color-purest);
        background: var(--bottom-nav-color);
        position: fixed;
        padding: 0px 30px;
        user-select: none;
        --webkit-user-select: none;
        border-top: 1px solid var(--bright-color);
        display: flex;
        justify-content: space-around;
        align-items: center;

        .linkWrapper {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            margin: 0 8px;
        }

        .link-icon {
            border-radius : 50%;
            height: 30px;
            width: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .link{
            margin-top: 0px;
            font-size: .65rem;
        }

        .bottom-link {
            color: var(--major-color-purest);
        }
    }
`


export {
    Header
}