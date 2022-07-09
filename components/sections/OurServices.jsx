import React from 'react'
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import SavingsIcon from '@mui/icons-material/Savings';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import InvincibleCard from './subsections/InvincibleCard'
import OurServicesContainer from '../styles/ourservices'

const data = [
    {
        id: 1,
        embled: <CurrencyBitcoinIcon fontSize='large'/>,
        title: "Crypto Integration",
        description: "We facilitate buying and selling of cryptocurrency",
    },
    {
        id: 2,
        embled: <MonetizationOnIcon fontSize='large' />,
        title: "Native Currency SEC",
        description: "We facilitate buying and selling of cryptocurrency",
    },
    {

        id: 3,
        embled: <SavingsIcon fontSize='large'/>,
        title: "Savings & Investment",
        description: "We facilitate buying and selling of cryptocurrency",
    }
]
const OurServices = () => {
  return (
    <OurServicesContainer>
        <div className='content'>
                <header>Our Services</header>
                <h3>We have had major rights and praises of good reputation amongst the section of investment platforms for trading and circular form of rewards. </h3>

                <span>
                    { data && data.map(cardItem => {
                      return (<InvincibleCard datum={cardItem} key={cardItem.id}/>)
                    })}
                </span>
        </div>
        
        
    </OurServicesContainer>
  )
}

export default OurServices