import React from 'react'
import styled from "styled-components"

const Title = ({children, level}) => {
  return (
    <StyledTitle level={level}>
        <h2> {children[0]} </h2>
        <span></span>
        <h6> {children[1] && children[1]} </h6>
    </StyledTitle>
  )
}

const StyledTitle = styled.header`
    font-size: ${props => props.level == 1 ? `1.7rem` : props.level == 2 ? `1.2rem`: `1rem`};
    font-weight: 400;
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 100%;
    color: var(--major-color-purest);
 
    h2 {
        text-transform:${props => props.level == 1 ? `uppercase` : `capitalize`} ;
        width: max-content;
        text-align: center;
        padding: 10px 0;
    }

    span{
        margin: 10px;
        width: 100px;
        background: ${ props => props.level == 1 ? `var(--bright-color )` : props.level == 2 ?  `var(--bright-color )` : `trasnparent`}; 
        border: 2px solid ${ props => props.level == 1 ? `var(--bright-color )` :  props.level == 2 ? `var(--bright-color )`:  `trasnparent`};
        border-radius: 50px;
    }
    h6 {
        font-weight: 200;
        font-size: 1.4rem;
        padding-bottom: 5px;
    }

`
export default Title