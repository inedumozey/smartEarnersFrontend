import styled from 'styled-components'
import {
    SectionWrapper,
    Button,
    Section,
    SectionTitle,
    SectionSubTitle,
    SectionText
} from '../../../styles/globalStyle'


// Hero section
const HeroSectionWrapper = styled(SectionWrapper)`
    background: ${({bg})=>bg};
    padding: 30px 0;
    min-height: ${({type})=>type=='hero' ? '90vh' : 'auto'}
    
`
const HeroSection = styled(Section)``

const HeroSectionTitle = styled(SectionTitle)`
    span {
        color: var(--bright-color)
    }
`
const HeroSectionSubTitle = styled(SectionSubTitle)`   

`
const HeroSectionText = styled(SectionText)`
    padding: 20px;
    margin: 10px 0;
    text-align: center;
    font-size: 1.1rem;

`
const HeroButton = styled(Button)`
    margin-top: 100px;
    margin-bottom: 30px;


    &:hover{
        color: #fff;
    }
    
`

const CardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

`
const LandscapeCard = styled.div`
    width: 300px;
    height: 270px;
    background: ${({bg})=>bg};
    margin: 15px;
    box-shadow: 2px 2px 3px #aaa, -2px -2px 3px #aaa;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ImageCard = styled.div`
    width: 200px;
    height: 150px;
    margin: 15px;
`

const ServiceSectionWrapper = styled(SectionWrapper)`
    flex-direction: column;
`
const SwipeWrapper = styled.div`
    margin: 20px auto;
    width: 97%;
    min-width: 300px;
    display: flex;
    justify-content: center;

    .swiper{
        width: 100%;
        display: flex;
        justify-content: center;

        @media (max-width: 920px){
            width: 100%;
        };
        @media (max-width: 820px){
            width: 450px;
        };
        @media (max-width: 500px){
            width: 450px;
        }
        @media (max-width: 490px){
            width: 350px;
        }
    }
`


export {
    HeroSectionWrapper,
    HeroSection,
    HeroSectionTitle,
    HeroSectionSubTitle,
    HeroSectionText,
    HeroButton,
    CardWrapper,
    LandscapeCard,
    ServiceSectionWrapper,
    SwipeWrapper,
    ImageCard
}