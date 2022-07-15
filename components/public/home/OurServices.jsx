import React from 'react'
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import SavingsIcon from '@mui/icons-material/Savings';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import {
  ServiceSectionWrapper,
  HeroSection,
  HeroSectionTitle,
  HeroSectionSubTitle,
  HeroSectionText,
  CardWrapper,
  LandscapeCard
} from './styles'

const data = [
    {
        id: 1,
        embled: <CurrencyBitcoinIcon fontSize='large'/>,
        title: "Crypto Integration",
        description: "Easier and Conventioanl way to fund and withdraw fromyour Account",
        bg: '#00415D05'
    },
    {
        id: 2,
        embled: <MonetizationOnIcon fontSize='large' />,
        title: "Savings and Inbvestment",
        description: "Easy Forex Solution for Everyone to Make subsequent income while we trade the market",
        bg: '#00415D30'
    },
    {

        id: 3,
        embled: <SavingsIcon fontSize='large'/>,
        title: "Safe and Secure",
        description: "Our Servers is fully protected from attacks. we use one of the most experienced, trusted protection and mitigation system",
        bg: '#00415D05'
    }
]
const OurServices = () => {
  return (
      <ServiceSectionWrapper>
        <HeroSection>
          <HeroSectionTitle>Our Services</HeroSectionTitle>
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
                        {item.title.toUpperCase()}
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