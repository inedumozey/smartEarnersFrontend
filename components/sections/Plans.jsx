import React from 'react'
import PlansContainer from '../styles/plans'
import StarIcon from '@mui/icons-material/Star'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import FortIcon from '@mui/icons-material/Fort';
import {Swiper, SwiperSlide } from 'swiper/react'
import PlansCard from '../sections/subsections/planscard'
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
import { EffectFade } from 'swiper';
import { useSwiper } from 'swiper/react';

const plans = [
    {
        id: 1,
        color: "var(--major-color-5A)",
        icon: <FortIcon  />,
        name: "Bronze",
        amount: "1500 SEC",
        roi: "40% ROI",
        days: "7 Days Investment Duration"
    },
    {
        id: 2,
        color:  "var(--gray-color)",
        icon: < StarIcon />,
        name: "Silver",
        amount: "3000 SEC",
        roi: "40% ROI",
        days: "7 Days Investment Duration"
    }, 
    {
        id: 3,
        color: "var(--medium-color)",
        icon: <WorkspacePremiumIcon />,
        name: "Gold",
        amount: "5000 SEC",
        roi: "85% ROI",
        days: "14 Days Investment Duration"
    }, 
    {
        id: 4,
        color: "var(--major-subtitle)",
        icon: < StarIcon />,
        name: "Platinum",
        amount: "6000 SEC",
        roi: "100% ROI",
        days: "14 Days Investment Duration"
    },
    {
        id: 5,
        color: "var(--major-color-purest)",
        icon: < StarIcon />,
        name: "Master Investor",
        amount: "200000 SEC",
        roi: "300% ROI",
        days: "14 Days Investment Duration"
    }
]

const Plans = () => {
  return (
    <PlansContainer>
        <header>Find a Plan to Power your Finance</header>
        <p>We have ranges of plans to fit your pocket size, choose one now</p>
        <section className="meso-layer">
                <Swiper className="swiper"
                    modules={[Navigation, EffectFade, Autoplay, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    autoplay = { {delay: 7000}}
                    pagination = {{ clickable: true}}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}>
                   
                    { plans && plans.map((plan, index) => {
                      return (<SwiperSlide key={index}><PlansCard datum={plan} color={plan.color}/></SwiperSlide>)
                    })}
                </Swiper>
        </section>
    </PlansContainer>
  )
}

export default Plans