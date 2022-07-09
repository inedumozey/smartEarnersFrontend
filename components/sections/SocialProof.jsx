import React, { useEffect } from 'react'
import Image from 'next/image'
import {Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar, 
  A11y,
  Autoplay,
  Virtual
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
        img: "/testimony.jpg",
        words:"I have invested with this platform and return has been steady and trust worthy, feel free to join",
        name: "Moses Inedu",
        position: "Software Developer"
    },
    { 
        id: 2,
        img: "/testimony.jpg",
        words: "I have invested with this platform and return has been steady and trust worthy, feel free to join",
        name: "Moses Inedu",
        position: "Software Developer"
    },
    { 
        id: 3,
        img: "/testimony.jpg",
        words: "I have invested with this platform and return has been steady and trust worthy, feel free to join",
        name: "Moses Inedu",
        position: "Software Developer"
    }
]
const SocialProof = () => {
    const swiper = useSwiper();
    
  return (
    <SocialProofContainer>
        <section className='left'>
            <header>What People Say About Us</header>
            <span>
                <Swiper 
                    modules={[Navigation, EffectFade, Pagination, Scrollbar, A11y]}
                    spaceBetween={20}
                    pagination = {{ clickable: true}}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}  effect="creative">
                   
                    { data && data.map((testimony, index) => {
                      return (<SwiperSlide key={index}><Testimony datum={testimony}/></SwiperSlide>)
                    })}
                </Swiper>
            </span>
            {/* <button onClick={()=> swiper.slideNext()}>Next</button> */}
        </section>

        <section className='right'>
        <header>Our Numbers</header>
        </section>
        
    </SocialProofContainer>
  )
}

export default SocialProof