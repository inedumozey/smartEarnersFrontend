import styled from 'styled-components'

const PlansContainer = styled.div`
    width: 100%;
    min-height: 40vh;
    margin: 80px auto;
    
    & .meso-layer{
        width: 80%;
        margin: 60px auto;
        height: 100%;
        display: flex;
        justify-content: center;
        
    }
    & header{
        text-align: center;
        font-size: 1.7rem;
        font-weight: 600;
        color: var(--major-color-purest);

    }


    & p {
            width: 100%;
            text-align: center;
            font-size: 1.2rem;
            font-weight: 400;
            color: var(--major-subtitle);
    }

    & .swiper {
        width: 100%;
        display: flex;
        justify-content: space-around;
    }

`

export default PlansContainer