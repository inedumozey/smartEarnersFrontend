import React from 'react'
import Hero from './sections/Hero';
import AboutUs from './sections/AboutUs';
import OurServices from './sections/OurServices';
import Plans from './sections/Plans';
import { useDispatch } from 'react-redux';
import { getPlans } from '../plans/redux/plans';
import Partners from './sections/Partners';
import StatAndTestimony from './sections/StatAndTestimony';


export default function Index() {
    const dispatch =  useDispatch()
    dispatch(getPlans())

    return (
        <div>
            <Hero />
            <OurServices />
            <Plans />
            <StatAndTestimony />
            <AboutUs />
            <Partners />
        </div>
    )
}