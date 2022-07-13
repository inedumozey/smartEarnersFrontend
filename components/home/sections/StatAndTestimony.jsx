import Image from 'next/image'
import PersonIcon from '@mui/icons-material/Person'
import SavingsIcon from '@mui/icons-material/Savings';
import PoundsIcon from '@mui/icons-material/CurrencyFranc'
import StarIcon from '@mui/icons-material/Star'
import {Swiper, SwiperSlide } from 'swiper/react'
import Avatar from 'react-avatar';
import styled from 'styled-components'

import {
    HeroSectionWrapper,
    HeroSection,
    HeroButton,
    HeroSectionTitle,
    HeroSectionSubTitle,
    HeroSectionText,
} from '../styles'

const Card1 = styled.div`
    width: 40vw;
    height: 80%;
    display: flex;
    align-items: center;

    div {
        margin: 3px
    }

    @media (max-width: 800px){
        width: 80vw;
    }
`
const Card2 = styled.div`
    width: 50vw;
    height: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;


    @media (max-width: 800px){
        width: 80vw;
    }
`

const data = [
    { 
        id: 1,
        img: "/me.jpg",
        words:"I have invested with this platform and return has been steady and trust worthy, feel free to join",
        name: "Marcus Dashe",
        position: "Duke of Jos",
        date: new Date()
    },
    { 
        id: 2,
        img: "/me.jpg",
        words: "I have invested with this platform and return has been steady and trust worthy, feel free to join",
        name: "Chinedu Chibuzor",
        position: "Palm Wine Tapper",
        date: new Date()
    },
    { 
        id: 3,
        img: "/me.jpg",
        words: "I have invested with this platform and return has been steady and trust worthy, feel free to join",
        name: "Peter Andrew",
        position: "UIX and Founder of Hydra Tech",
        date: new Date()
    }
]

const stats = [
    {
        id: 1,
        icon : <PersonIcon fontSize="large"/>, 
        info: "Total Members",
        num: 6237770
    },

    {
        id: 2,
        icon : <SavingsIcon fontSize="large"/>, 
        info: "Investment",
        num: 9267
    },

    {
        id: 3,
        icon : <PoundsIcon fontSize="large"/>, 
        info: "Total SEC Paid",
        num: 82782711910
    },
    {
        id: 4,
        icon : <StarIcon fontSize="large"/>, 
        info: "Rating",
        num: 4.5
    }
]

export default function StatAndTestimony() {
  return (
    <HeroSectionWrapper style={{justifyContent: 'center'}}>

        <HeroSection style={{height: '75vh', background: '#00415D30'}}>
            <HeroSectionTitle style={{textAlign: 'left'}}>Testimonials</HeroSectionTitle>
            <Card />
        </HeroSection>

        <HeroSection style={{height: '75vh', background: '#7da0af'}}>
            <HeroSectionTitle style={{textAlign: 'left'}}>Statistics</HeroSectionTitle>
            <Card2>
                <div className="row">
                    <div style={{width: '170px', height: '170px', border: '1px solid red', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                       <div style={{color: '#F1AD00'}}>Icon</div>
                       <HeroSectionSubTitle>Total Members</HeroSectionSubTitle>
                       <HeroSectionSubTitle style={{color: '#fff'}}>counts</HeroSectionSubTitle>
                    </div>
                    <div style={{width: '170px', height: '170px', border: '1px solid red', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                        <div style={{color: '#F1AD00'}}>Icon</div>
                        <HeroSectionSubTitle>Total Members</HeroSectionSubTitle>
                        <HeroSectionSubTitle style={{color: '#fff'}}>counts</HeroSectionSubTitle>
                    </div>
                </div>
                <div className="row">
                    <div style={{width: '170px', height: '170px', border: '1px solid red', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                        <div style={{color: '#F1AD00'}}>Icon</div>
                        <HeroSectionSubTitle>Total Members</HeroSectionSubTitle>
                        <HeroSectionSubTitle style={{color: '#fff'}}>counts</HeroSectionSubTitle>
                    </div>
                    <div style={{width: '170px', height: '170px', border: '1px solid red', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                        <div style={{color: '#F1AD00'}}>Icon</div>
                        <HeroSectionSubTitle>Total Members</HeroSectionSubTitle>
                        <HeroSectionSubTitle style={{color: '#fff'}}>counts</HeroSectionSubTitle>
                    </div>
                </div>
            </Card2>
        </HeroSection>

    </HeroSectionWrapper>
  )
}


function Card(){

    return (
        <Card1>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                <small>
                    <Avatar src={data[0].img} name="person" size="180" round={true}/>
                </small>
                <small style={{paddingLeft: '4px'}}>name</small>
                <small style={{paddingLeft: '4px'}}>date</small>

            </div>
            
            <div style={{textAlign: 'left'}}>
                {data[0].words}
            </div>
        </Card1>
    )
}