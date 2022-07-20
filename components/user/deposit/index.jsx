import React, { useState } from 'react'
import Select from 'react-select';
import GppGoodIcon from '@mui/icons-material/GppGood'
import DepositContainer from './styles'
import StyledDashboardHeader from '../dashboardHeader'


const optionCrypto = [
  { value: 'USDT', label: 'Tether (USDT)' },
  { value: 'BUSD', label: 'Binance (BUSD)' },
  { value: 'LTC', label: 'Litecoin (LTC)' },
];

export default function Deposit() {
  const [ selectCoin, setSelectedCoin ] = useState("USDT")
  const [isVerified, setIsVerified ] = useState(true)
    return (
    <DepositContainer>
      <StyledDashboardHeader />
      <section className="central-column">
        
      <div className="container">
                    <h3>Deposit</h3>
                    <span>
                        <form>
                          <label><input type="number" name="amount" placeholder='Enter amount in USD to deposit' maxLength={"10000000"} minLength={"1000"} required/></label>
                          
                           <p>* $1 ~ 500 SEC</p>
                           <p>* Deposit amount cannot be less than $10</p>
                          {/* <p>* After deposit, your accounnt will be updated within few hours to a month</p> */}
                          <button><small> Proceed with Payment </small></button>
                        </form>  
                      </span>           
                  </div>
      </section>
      
    </DepositContainer>
  )
}

