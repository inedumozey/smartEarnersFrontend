import styled from 'styled-components'

const GlobalFooter = styled.footer`
    background: linear-gradient(to bottom, #000000, #191b1e, #181717, #000000);
    margin-bottom: ${({isMobile})=>isMobile ? '60px' : '0px'};
    
    .top{
        display: grid;
        grid-template-columns: repeat( auto-fit, minmax(250px, 1fr));
        color: #ccc;
        font-size: .9rem;


        & .col {
            min-height: 100px;
            margin: 10px;
            min-width: 150px;
            display: flex;
            text-align: center;
            flex-direction: column;
            padding: 10px;
            align-items: center;
            border: 1px solid var(--major-color-30A);

            & .imgDiv{
                width: 100px;
                margin-top: 10px;
            }

            h3 {
                margin-bottom: 5px;
                color: var(--major-color-deep);
                position: relative;
            }

            ul {
                color: blue;

                a {
                    margin: 4px;
                    font-size: .9rem;
                    &:hover{
                        color: #c30
                    }
                }
            }
        }
    }
    
    .bottom {
        width: 100%;
        background: var(--major-color-purest);
        text-align: center;
        color: #aaa;
        padding: 10px;
    }
`

export {
    GlobalFooter,
  };