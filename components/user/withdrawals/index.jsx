import React, { useState } from 'react'
import Select from 'react-select'
import GppGoodIcon from '@mui/icons-material/GppGood'
import WithdrawalsContainer from './styles'
import StyledDashboardHeader from '../dashboardHeader'


const optionCrypto = [
  { value: 'USDT', label: 'Tether (USDT)' },
  { value: 'BUSD', label: 'Binance (BUSD)' },
  { value: 'LTC', label: 'Litecoin (LTC)' },
];

export default function Withdrawals() {
  const [ selectCoin, setSelectedCoin ] = useState("USDT")
  const [ selectAmount, setSelectAmount ] = useState("1000")
  const [isVerified, setIsVerified ] = useState(true)

  return (
  
    <WithdrawalsContainer>
       <StyledDashboardHeader />
       
       <section className="central-column">
        <div className="container">
                <h3>Withdrawal</h3>

                <span>
                        <form>
                        <label><input type="number" name="amount" placeholder='Enter amount to withdraw' maxLength={"10000000"} minLength={"1000"} required/></label>
                          <p>* Enter amount in multiple of 1000</p>
                          <p>* Maximum withdrawal is 10k</p>
                          <label><input type="text" name="walletaddress" placeholder="Enter wallet address" required/></label>
                          <Select
                              placeholder="Choose cryptocoin for deposit"
                              defaultValue={selectCoin}
                              onChange={setSelectedCoin}
                              options={optionCrypto}
                          />
                         
                         <p>* Make sure the wallet address is in sync with the chosen cryptocoin</p>
                          <p>* Withdrawal is subject to rejection due to malicious attack or invalid input</p>
                          <p>* After withdrawal, you will be alerted within 24 hours</p>

                          <button><small>Proceed with Withdraw </small></button>
                        </form>  
                      </span>    
        </div>
       </section>
    </WithdrawalsContainer>
  
  )
}



