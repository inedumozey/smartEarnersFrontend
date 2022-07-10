import React from 'react'
import styled from 'styled-components'

const Midget = ({datum}) => {
  return (
    <StyledMidget>
        <span className='icon'>{datum.icon}</span>
        <span className='info'>{datum.info}</span>
        <span className='num'>{datum.num}</span>
    </StyledMidget>
  )
}

const StyledMidget = styled.div`
    display: flex;
    flex-flow: column nowrap;
    width: 200px;
    height: 200px;

    & span{
        text-align: center;
        font-size: 1.2rem;
        color: var(--white-bg-color);
    }
    & .info{
        color: var(--major-color-purest);
        font-size: 1rem;
    }

    & .num{
        padding-top: 10px ;
        font-size: 1.8rem;
    }
`
export default Midget