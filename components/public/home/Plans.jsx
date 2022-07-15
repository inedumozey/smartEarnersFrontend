import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import {Swiper, SwiperSlide } from 'swiper/react';
import PlanCards from './PlanCards.jsx';
import { getPlans } from '../../../redux/investmentPlans/investmentPlans.js';

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
import Spinner from '../../../loaders/Spinner';

import {
    ServiceSectionWrapper,
    HeroSection,
    HeroSectionTitle,
    HeroSectionSubTitle,
    SwipeWrapper
} from './styles'


const Plans = () => {
    const dispatch = useDispatch()
    const state = useSelector(state=>state);
    const {plans} = state.plans;
    // console.log(plans)
  
    useEffect(()=>{
        dispatch(getPlans())
    }, [])

  return (
    <ServiceSectionWrapper bg=''>
        <HeroSection>
            <HeroSectionTitle>Investment Plans</HeroSectionTitle>
            <HeroSectionSubTitle>Find the Package Plan that is Convinient for you</HeroSectionSubTitle>
        </HeroSection>
            {/* check if plans exist */}
            {
            (plans && plans.isLoading) ? 
            (
                // set loading div
                <div>
                    <Spinner />
                </div>
            ) :
            (
                // display data, first check if empty
                plans.data.length < 1 ? 
                (
                    <div style={{textAlign: 'center'}}>No Plan currently available</div>
                ):
                (
                <SwipeWrapper>
                    <Swiper
                        className='swiper'
                        modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
                        spaceBetween={10}
                        autoplay = { {delay: 7000}}
                        loop
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
                        {plans.data.map((data, i)=>{
                            return (
                                <SwiperSlide key={data._id}>
                                    <PlanCards data={data} i={i}/>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </SwipeWrapper>
                )
            )
            }
          
    </ServiceSectionWrapper>
  )
}

export default Plans