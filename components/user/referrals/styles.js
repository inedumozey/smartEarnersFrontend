import styled from 'styled-components'

const ReferralContainer = styled.div`
width: 100%;
  height: fit-content;
  margin: 0px;
  color: #00415d;
  border: 2px solid transparent;
  
  .central-column{
      width: 60%;
      height: fit-content;
      background: whitesmoke;
      margin: 50px auto 10px;
      border-radius: 4px;
      .container{
              width: 74%;
              margin: 0px auto;
      
              h3 {
                  padding-top: 20px;
                  font-weight: 400;
                  font-size: 1.5rem;
                 
              }

              span{
                  padding: 10px;
                  font-size: 1.1rem;
                  p{
                      display: flex;
                      align-items: center ;
                      margin-bottom: 10px;
                  }
              }
            }
      }

      .central-column .second{
      margin-top:0px;
      border: 2px solid red;
  }

      & .bonus-section{
        display: flex;
        justify-content: space-between;
        margin: 0 0 50px;
      }
      & ul li {
        margin: 10px;
      }
`

export default ReferralContainer;