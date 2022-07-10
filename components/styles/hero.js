import styled from 'styled-components'



const HeroContainer = styled.div`
    width: 100%;
    background-color: var(--major-color-5A);
    min-height: 60vh;
   

    .hero{
        width: 80%;
        display: flex;
        margin: 0 auto;
       
        .left{
            margin-top: 200px;
            width: 55%;
            text-align: center;
            h3{
                font-size: 3rem;
                margin: 5px 0px;
                color: var(--major-color-purest);
            }

            h6{
                font-size: 1.8rem;
                font-weight: 400;
                color: var(--major-subtitle);
            }

            p{
                width: 80%;
                font-size: 1.2rem;
                margin: 40px auto;
                color: var(--major-subtitle);
            }

            button{
                margin: 40px 0;
                border: none;
                background: var(--bright-color);
                color: var(--light-color);
                width: 280px;
                height: 50px;
                border-radius: 30px;
                font-weight: 600;
                font-size: 1.2rem;
                padding: 10px;
                box-shadow: rgba(99, 99, 99, 0.6) 0px 2px 8px 0px;
            }
        }

        .right{
            width: 40%;
            display: flex;
            justify-content: flex-end;
            align-items: center ;
            margin-top: 200px;
        }
    }
    
`

export default HeroContainer
