import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Avatar from 'react-avatar'

const Testimony = ({datum}) => {
  return (
    <StyledTestimony>
                
                <span className="user-img">
                    <Avatar src={datum.img} name="person" size="180" round={true}/>
                    <p>{datum.words}</p>
                </span>
                <p className='name-content'> {datum.name}</p>
                <p className='position-content'> {datum.position} </p>
                 
    </StyledTestimony>
  )
}

const StyledTestimony = styled.div`
    width: 90%;
    margin: 50px auto;
    display: flex;
    flex-direction: column ;
    justify-content: center ;
    align-items: center;
   

    & .user-img{
        width: 90%;
        display: flex;
        justify-content: space-around;
        align-items: center;

        p{ 
            width: 50%;
            text-align: center;
            font-size: 1.2rem;
            font-weight: 400;
            color: var(--major-subtitle);
        }
    } 

    & .name-content {
                margin-top: 40px;
                text-align: center;
                font-size: 1.7rem;
                font-weight: 600;
                color: var(--major-color-purest);
            }
    & .position-content{
                
                text-align: center;
                font-size: 1.2rem;
                font-weight: 400;
                color: var(--major-subtitle);
    }
`
export default Testimony