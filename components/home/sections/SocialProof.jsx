import React, { useEffect } from 'react'
import Image from 'next/image'
import PersonIcon from '@mui/icons-material/Person'
import SavingsIcon from '@mui/icons-material/Savings';
import PoundsIcon from '@mui/icons-material/CurrencyFranc'
import StarIcon from '@mui/icons-material/Star'
import {Swiper, SwiperSlide } from 'swiper/react'
import Midget from '../sections/subsections/midget'
import {
  Navigation,
  Pagination,
  Scrollbar, 
  A11y,
  Autoplay
} from "swiper/core";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { EffectFade } from 'swiper';
import { useSwiper } from 'swiper/react';
import Testimony from './subsections/testimony'
import SocialProofContainer from '../styles/socialproof'


const data = [
    { 
        id: 1,
        img: "/me.jpg",
        words:"I have invested with this platform and return has been steady and trust worthy, feel free to join",
        name: "Marcus Dashe",
        position: "Duke of Jos"
    },
    { 
        id: 2,
        img: "/me.jpg",
        words: "I have invested with this platform and return has been steady and trust worthy, feel free to join",
        name: "Chinedu Chibuzor",
        position: "Palm Wine Tapper"
    },
    { 
        id: 3,
        img: "/me.jpg",
        words: "I have invested with this platform and return has been steady and trust worthy, feel free to join",
        name: "Peter Andrew",
        position: "UIX and Founder of Hydra Tech"
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
const SocialProof = () => {
    
  return (
    <SocialProofContainer>
        <section className='left'>
            <header>What People Say About Us</header>
            <span>
                <Swiper 
                    modules={[Navigation, EffectFade, Autoplay, Pagination, Scrollbar, A11y]}
                    spaceBetween={20}
                    autoplay = { {delay: 4000}}
                    pagination = {{ clickable: true}}
                    slidesPerView={1}
                    onSlideChange={() =>{}}
                    onSwiper={(swiper) => {}}  effect="creative">
                   
                    { data && data.map((testimony, index) => {
                      return (<SwiperSlide key={index}><Testimony datum={testimony}/></SwiperSlide>)
                    })}
                </Swiper>
            </span>
            {/* <button onClick={()=> swiper.slideNext()}>Next</button> */}
        </section>

        <section className='right'>
            <header>Our Numbers</header>

            <div className="foursquare">
                    { stats && stats.map(stat => {
                       return( <Midget datum={stat} key={stat.id} />)
                    })}
            </div>
        </section>
        
    </SocialProofContainer>
  )
}

export default SocialProof