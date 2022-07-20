import React, { useEffect } from 'react'
import styled from 'styled-components'
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import PlayForWorkIcon from '@mui/icons-material/PlayForWork';
import { DateTime } from 'luxon'
import StyledDashboardHeader from '../dashboardHeader'
import { StyledTransactionCard } from './styles'


const TransactionCard = ( { datum }) => {

  return (
    
    <StyledTransactionCard>
            
            <main>
                <aside className='left'>
                        <section>
                            <em>{ datum.category === "transfer" ? <PublishedWithChangesIcon /> : datum.category === "withdrawal" ? <CallReceivedIcon /> : <PlayForWorkIcon /> }</em>
                            <span>
                                <p>
                                    <h4>{datum.category.charAt(0).toUpperCase()+datum.category.slice(1)}</h4>
                                    <time>
                                        {DateTime.fromSeconds(datum.date.now()).toLocaleString({ day: '2-digit', month: '2-digit', year: 'numeric' }) }
                                        {/* toLocaleString({ day: '2-digit', month: '2-digit', year: 'numeric' }) */}
                                    </time>
                                </p>

                            </span>
                        </section>
                </aside>

                <aside className='right'>
                    <span>
                        <small>{datum.status.charAt(0).toUpperCase()+datum.status.slice(1)}</small>
                        <p>{datum.category == "deposit" ? `+${datum.amount}` : `-${datum.amount}`}</p>
                    </span>
                </aside>
            </main>
            
    </StyledTransactionCard>
  )
}

export default TransactionCard