import React from 'react'
import Image from 'next/image'
import { HeroButton,
  HeroSectionWrapper,
  HeroSection,
  HeroSectionTitle,
  HeroSectionSubTitle,
  HeroSectionText,
} from '../styles'

const AboutUs = () => {
  return (
    <HeroSectionWrapper>
        <HeroSection>
            <HeroSectionTitle>About Us</HeroSectionTitle>
            <HeroSectionText>We are poised and position to empowered our community in order to lift them out of financial distress</HeroSectionText>
        </HeroSection>
    </HeroSectionWrapper>
  )
}

export default AboutUs