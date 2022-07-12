import React from 'react'
import { useSelector } from "react-redux";
import {Swiper, SwiperSlide } from 'swiper/react';
import PlanCards from './PlanCards.jsx';

import SwiperCore, {
    Navigation,
    Pagination,
    Scrollbar, 
    A11y,
    Autoplay,
  } from "swiper/core";

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {
    ServiceSectionWrapper,
    HeroSection,
    HeroSectionTitle,
    HeroSectionSubTitle,
    SwipeWrapper
} from '../styles'

const Plans = () => {
    const state = useSelector(state=>state);
    const {isLoading, status, data} = state.plans.plans;

  return (
    <ServiceSectionWrapper bg=''>
        <HeroSection>
            <HeroSectionTitle>Investment Plans</HeroSectionTitle>
            <HeroSectionSubTitle>Find the Package Plan that is Convinient for you</HeroSectionSubTitle>
        </HeroSection>

        <SwipeWrapper>
            {
                (state.plans && isLoading) ? 
                (
                    <div>Loading...</div>
                ) :
                (
                    data && data.length < 1 ? 
                    (
                        'No Plan currently available'
                    ):
                    (
                        <>
                        <Swiper
                            className='swiper'
                            modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
                            spaceBetween={10}
                            navigation
                            loop
                            autoplay = { {delay: 7000}}
                            scrollbar={{draggable: true}}
                            pagination = {{ clickable: true}}
                            slidesPerView={3}
                            breakpoints={
                                {
                                    0:{
                                        width: 0,
                                        slidesPerView: 1,
                                        spaceBetween: 5
                                    },
                                    500:{
                                        width: 500,
                                        slidesPerView: 2,
                                        spaceBetween: 5
                                    },
                                    680:{
                                        width: 680,
                                        slidesPerView: 3,
                                        spaceBetween: 5
                                    },
                                    920:{
                                        width: 920,
                                        slidesPerView: 3,
                                        spaceBetween: 5
                                    },
                                
                                }
                            }>
                            {       
                                data.map((data, i)=>{
                                    return (
                                        <div key={i}>
                                            <SwiperSlide>
                                                <PlanCards data={data} i={i}/>
                                            </SwiperSlide>
                                        </div>
                                    )
                                })
                            }
                        </Swiper>
                        </>
                    )
                )
            }
        </SwipeWrapper>   
    </ServiceSectionWrapper>
  )
}

export default Plans