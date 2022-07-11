import styled from 'styled-components'

const SocialProofContainer = styled.div`
    width: 100%;
    background-color: transparent;
    min-height: 65vh;
    font-size: 1.1rem;
    display: flex;
    margin: 30px 0;
    z-index: -1;

    & section{
        width: 50%;
        /* border: 2px solid black; */
        min-height: 100%;
    }

    & header {
        text-align: start;
        font-size: 1.3rem;
        font-weight: 600;
        color: var(--major-color-purest);
        padding: 30px;
    }

    & .left {
            background-color: var(--major-color-5A);
        }
    & .right {
        background-color: var(--medium-color);

        header {
            color: var(--white-bg-color);
        }
        
    }
    & .foursquare {
        width: 70%;
        height: 90%;
        margin: 20px auto;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly ;
        align-items: space-evenly ;
    }
`

export default SocialProofContainer