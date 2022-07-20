import React, { useState } from 'react'
import TransferContainer from './styles'
import StyledDashboardHeader from '../dashboardHeader'



export default function Transfer() {
  return (
    <TransferContainer>
        <StyledDashboardHeader />
       <section className="central-column">
        <div className="container">
                <h3>Transfer</h3>
                <span>
                        <form>
                        <label><input type="text" name="account-transfer" placeholder="Enter receiver's account number" required/></label>
                        <label><input type="number" name="amount-transfer" placeholder='Enter amount in SEC to transfer' required/></label>
                          
                        
                          <p>* Make sure you input valid user account number</p>
                          <p>* Suspicious activity or invalid account number can cause transfer rejection</p>
                          <p>* You will be alerted within 24 hours</p> 

                          <button><small>Proceed with Transfer</small></button>
                        </form>  
                  </span> 
        </div>
       </section>
    </TransferContainer>
  )
}


