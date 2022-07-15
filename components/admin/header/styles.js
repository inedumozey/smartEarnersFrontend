import styled from 'styled-components'

const Header = styled.div`
    width: 100%;
    height: 60px;
    background: var(--major-color-purest);
    position: fixed;
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

    .top-nav-bar{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .col3 {
            display: flex;
            padding: 0 10px;
            border-radius: 20px;
            border-bottom: 3px solid #ccc;
            color: var(--bright-color);
            justify-content: space-between;
            align-items: center;
            font-size: 1.2rem;
            font-weight: 600;
            position: relative;

            small {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: #12ed1b;
                position: absolute;
                top: -0;
                right: 0;
            }
        }

        .navLink {
            display: flex;

            .navLinkWrapper{
                margin: 0 4px;
            }
        }
    }

    .side-nav-bar{
        

    }
`

export {
    Header,
    
}