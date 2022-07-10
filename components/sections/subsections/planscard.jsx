import React from 'react'
import styled from 'styled-components'

const PlansCard = ({datum, color}) => {
  return (
    <StyledPlansCard color={color}>
        <span className="north">
            <small>{datum.icon}</small>
            <small>{datum.name}</small>
        </span>
        
        <span className="central">{datum.amount}</span>
        
        
        <span className="south">
            <small>{datum.roi} </small>
            <small>{datum.days}</small>
        </span>

        <button>Invest</button>
    </StyledPlansCard>
  )
}

const StyledPlansCard = styled.div`
    background-color: ${(props) => props.color};
    color: ${props => props.color != "var(--major-color-5A)"? "white" : "var(--major-color-pures)"};
    display: flex;
    flex-flow: column nowrap;
    width: 300px;
    height: 300px;
    text-align: center;
    padding-top: 20px;
    border: 1px solid var(--gray-color);
    border-radius: 7px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    & .north {
        font-weight: 600;
        display: flex;
        flex-flow: column nowrap;
        align-items: center ;
        margin :20px;
    }

    & .central {
        font-size: 2rem;
    }

    & .south {
        font-size: 1rem;
        display: flex;
        flex-flow: column nowrap;
        margin: 20px;
    }
    & button{
        margin: 10px auto;
        border: none;
        width: 130px;
        height: 30px;
        border-radius: 30px;
        font-weight: 400;
        font-size: 1.1rem;
        color: var(--light-color);
        background: var(--bright-color);
    }
`

export default PlansCard