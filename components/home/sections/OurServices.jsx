import React from 'react'
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import SavingsIcon from '@mui/icons-material/Savings';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
// import InvincibleCard from './subsections/InvincibleCard'
// import OurServicesContainer from '../styles'
import { HeroButton,
  ServiceSectionWrapper,
  HeroSection,
  HeroSectionTitle,
  HeroSectionSubTitle,
  HeroSectionText,
  CardWrapper,
  LandscapeCard
} from '../styles'

const data = [
    {
        id: 1,
        embled: <CurrencyBitcoinIcon fontSize='large'/>,
        title: "Crypto Integration",
        description: "We facilitate buying and selling of cryptocurrency",
        bg: '#00415D05'
    },
    {
        id: 2,
        embled: <MonetizationOnIcon fontSize='large' />,
        title: "Native Currency SEC",
        description: "We facilitate buying and selling of cryptocurrency",
        bg: '#00415D30'
    },
    {

        id: 3,
        embled: <SavingsIcon fontSize='large'/>,
        title: "Savings & Investment",
        description: "We facilitate buying and selling of cryptocurrency",
        bg: '#00415D05'
    }
]
const OurServices = () => {
  return (
      <ServiceSectionWrapper>
        <HeroSection>
          <HeroSectionTitle>Our Services</HeroSectionTitle>
          <HeroSectionSubTitle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nisi!</HeroSectionSubTitle>
        </HeroSection>

        <HeroSection>
            <CardWrapper>
              {
                data && data.map((item, i) => {
                  return (
                    <LandscapeCard key={i} bg={item.bg}>
                      <HeroSectionSubTitle style={{color: '#F1AD00'}}>
                          {item.embled}
                        </HeroSectionSubTitle>
                        <HeroSectionSubTitle>
                          {item.title}
                        </HeroSectionSubTitle>
                        <HeroSectionText>
                          {item.description}
                        </HeroSectionText>
                    </LandscapeCard>
                  )
                })
              }
            </CardWrapper>
        </HeroSection>
      </ServiceSectionWrapper>
  )
}

export default OurServices