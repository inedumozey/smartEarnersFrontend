import styled from 'styled-components'

const AboutUsContainer = styled.div`
    width: 100%;
    height: max-content;
    background: var(--white-bg-color);
    display: flex;
    justify-content: start ;
    align-items: start ;
    z-index: -1;

    & .left{
        /* display: relative ; */
        width: 70%;
       
        /* min-height: 500px;
        padding-top: 125%;  */

        
    }
    & .right{
        display: flex;
        flex-direction: column ;
        width: 30%;
        font-size: 1.7rem;
        font-weight: 600;
        color: var(--major-color-purest);
 
        header{
            width: 100%;
            text-align: start;
        }
        p{
            width: 50%;
            margin-top: 20px;
            text-align: start;
            font-size: 1.2rem;
            font-weight: 400;
            color: var(--major-subtitle);
        }
}
    

`

export default AboutUsContainer 