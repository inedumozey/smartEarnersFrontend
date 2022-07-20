import React, { useState} from 'react'
import styled from 'styled-components'
import GppGoodIcon from '@mui/icons-material/GppGood'

const DashboardHeader = () => {
    const [isVerified, setIsVerified ] = useState(true)
  return (
    <StyledDashboardHeader className="user-bio">
        <section className="user-info">
                  
                  <span><h3 className="user-avatar">R</h3> <b>Ramond Murphy &nbsp;{ isVerified ? <GppGoodIcon fontSize="small"/>: null} </b> </span>
                  
                  <p>Current Balance &nbsp;<b> 2000 SEC </b></p> 
              
        </section> 

    </StyledDashboardHeader>
  )
}

const StyledDashboardHeader = styled.span`
  
                width: 100%;
                height: 150px;
                display: flex;
                align-items: stretch;
                justify-content: space-between;
                background: whitesmoke;

                .user-avatar{
                    width: 100px;
                    height: 100px;
                    border-radius: 100%;
                    border: 2px solid gray;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: var(--major-color-purest);
                    color: white;
                    font-size: 3rem;
                    font-weight: 400;
                    border: 2px solid var(--bright-color);
                  
                }

                .user-info{
                    display: flex;
                    width: 80%;
                    margin: 100px auto;
                    font-size: 1.3rem;
                    justify-content: space-between;
                    align-items: center;
                    height: 20% ;
                    /* border: 2px solid blue; */
                    span{
                        display: flex;
                        justify-content: center;
                        align-items: center ;
                        /* border: 2px solid red; */
                       h3 {
                        margin-top: 60px;
                       }
                        b{
                            margin-left: 50px;
                            display: flex;
                            align-items: center ;
                            flex-wrap: wrap ;
                        }
                        
                    }
                
                    p{
                        font-size: 1rem;
                        b{
                            font-size: 1.3rem;
                        }
                    }
                   
                }

`

export default DashboardHeader