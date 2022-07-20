import React, { useState } from 'react'
import Select from 'react-select'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';

import StyledDashboardHeader from '../dashboardHeader'
import ReferralContainer from './styles'

const data = {
  ReferredBy: "Username",
  UserReferalId: "hGHG2ar2B2$@7SJA",
  referree: [
    {name: "Usmanhassan", bonus: "20SEC"}, 
    {name: "Chibuzorokoro", bonus: "30SEC"}, 
    {name: "Ntiemfuankuk", bonus: "28SEC"}, 
    {name: "Oludareadeniyi", bonus: "38SEC"}, 
    {name: "Eneokwa", bonus: "62SEC"}
  ]
}
export default function Referrals() {
  function calcBonus(x){
      let acc = 0;
      x.map(y => {
        acc += parseFloat(y.bonus)
      })

      return acc

  }
  return (
    <ReferralContainer>
      <StyledDashboardHeader />
       <section className="central-column">
        <div className="container">
                <h3>Referral</h3>
                <span>
                        <p>Referred By &nbsp;&nbsp;<b> {data.ReferredBy} </b></p> 
                        <p>Your Referral ID &nbsp;&nbsp;<b> {data.UserReferalId} </b></p>   
                </span>  
        </div>
        </section>
        <section className="central-column second">
        <div className="container">
                <h3>Bonus</h3>
                <section className="bonus-section">
                    <span>
                        <b>Referree</b> 

                        <ul>
                          {data.referree.map(referree => (<li key={referree}>{referree.name} - <b>{referree.bonus}</b></li>))}
                        </ul> 
                    </span>  
                    <span>
                            <p>Your Total Bonus &nbsp;&nbsp;
                              <b>{calcBonus(data.referree)} </b>
                              </p> 
                        
                    </span> 
                </section>
        </div>
       </section>
    </ReferralContainer>
  )
}

