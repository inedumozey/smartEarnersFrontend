import React from 'react'
import styled from 'styled-components'

const InvincibleCard = ({datum}) => {

  return (
    <StyledInvincibleCard>
        <span className='emblem'>{datum.embled ? datum.embled : "Icon"}</span>
        <b>{datum.title}</b>
        <p>{datum.description}</p>
    </StyledInvincibleCard>
  )
}

const StyledInvincibleCard = styled.div`
    width: 300px;
    height: 400px;

    & span {
        margin: 10px auto;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--major-color-purest);
        height: 50px;
        width: 50px;
       
        /* text-align: center; */
        border: 2px solid var(--major-subtitle);
        border-radius: 100%; 
        }
     &  b {
            width: 100%;
            margin: 20px auto;
            color: var(--major-color-purest);
            font-weight: 600;
            text-align: center;
            display: flex;
        justify-content: center;
        align-items: center;
            font-size: 1.3rem;
        }

    & p {
        margin: 20px;
        color: var(--major-subtitle);
        text-align: center;
    }
    
`

export default InvincibleCard