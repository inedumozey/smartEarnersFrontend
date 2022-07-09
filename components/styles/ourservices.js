import styled from 'styled-components'



const OurServicesContainer = styled.div`
    width: 100%;
    background-color: var(--white-bg-color);
    min-height: 60vh;
    font-size: 1.1rem;
    

    & .content{
        width: 80%;
        margin: 50px auto;
       

        header {
            text-align: center;
            font-size: 1.7rem;
            font-weight: 600;
            color: var(--major-color-purest);
        }

        h3 {
            width: 50%;
            margin: 20px auto;
            text-align: center;
            font-size: 1.2rem;
            font-weight: 400;
            color: var(--major-subtitle);
        }
        span {
            margin-top: 50px;
            display: flex;
            justify-content: space-around ;
        }
    }
`

export default OurServicesContainer