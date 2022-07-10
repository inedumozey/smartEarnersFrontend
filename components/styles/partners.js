import styled from 'styled-components'

const PartnersContainer = styled.div`
        width: 100%;
        min-height: 40vh;
        margin: 80px auto;
    & header {
        text-align: center;
        font-size: 1.7rem;
        font-weight: 600;
        color: var(--major-color-purest);
    }

    p{
        width: 100%;
            text-align: center;
            font-size: 1.2rem;
            font-weight: 400;
            color: var(--major-subtitle);
    }

    & .partners-brandmark-box{
        width: 80%;
        margin: 100px auto;
        height: 80%;
    }
    & ul {
        display: flex;
        justify-content: space-around
       
    }
    &  li{
            text-align: center
        }
`

export default PartnersContainer