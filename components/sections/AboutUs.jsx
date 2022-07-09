import React from 'react'
import Image from 'next/image'
import AboutUsContainer from '../styles/aboutus'

const AboutUs = () => {
  return (
    <AboutUsContainer>
        <div className='left'>
            <Image src={'/aboutus.jpg'} layout="responsive" height={10} width={15} objectFit="contain" alt="" />
        </div>

        <div className='right'>
            <header>About Smart Earner</header>
            <p>We are poised and position to empowered our community in order to lift them out of financial distress</p>
        </div>
    </AboutUsContainer>
  )
}

export default AboutUs