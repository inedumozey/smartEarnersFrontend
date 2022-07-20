

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import AddressIcon from '@mui/icons-material/Home';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import GppGoodIcon from '@mui/icons-material/GppGood'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { useState } from 'react'
import StyledDashboardHeader from '../dashboardHeader'
import { ProfileContainer } from './styles'

export default function Index() {

  const [isVerified, setIsVerified ] = useState(true)
  return (
    <ProfileContainer>
      <section className="central-column">
          <StyledDashboardHeader />
          <section className="central-column-second">
                  <div className="container">
                   
                    <span>
                      <h3>Bio</h3>
                        <p><PersonOutlineIcon fontSize="small"/>&nbsp; <b> Ramonmurphy</b></p>
                        <p><AccountBalanceWalletIcon fontSize="small"/>&nbsp; <b>3033027680</b></p>
                    </span> 

                    
                    <span>
                    <h3>Contact</h3>
                        <p>< MailOutlineIcon fontSize="small"/>&nbsp; <b>ramon.murphy@gmail.com </b></p> 
                        <p>< SmartphoneIcon fontSize="small"/>&nbsp;<b>08034477604</b></p>   
                        {/* <p>< AddressIcon/>  &nbsp;&nbsp;<b>7 Takori Gusau, Zamfara State</b></p>    */}
                    </span>                     
                  </div>
          </section>

          {/* <section className="central-column-third">
          <div className="container">
                    <h3>Account</h3>
                    <span>
                        <p>< AccountBalanceIcon/> &nbsp;&nbsp;<b> 2000SEC </b></p> 
                        <p>< SettingsAccessibilityIcon/> <b>Inusa Hassan</b></p>   
                    </span>                  
                  </div>
          </section> */}
      </section>
    </ProfileContainer>
  )
}
