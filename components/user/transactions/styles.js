import styled from 'styled-components'

const TransactionContainer = styled.div`
        width: 100%;
        height: fit-content;
        margin: 0px;
        /* background: #00415d30; */
        color: #00415d;
        border: 2px solid transparent;

        .central-column{
            width: 60%;
            height: fit-content;
            max-height: 200vh;
            background: whitesmoke;
            margin: 50px auto 0px;
            border-radius: 4px;
           
            .container{
                    width: 74%;
                    margin: 5px auto;
                    
                    h3 {
                        padding-top: 20px;
                        font-weight: 400;
                        font-size: 1.5rem;
                       
                    }
                    span{
                        padding: 10px;
                        font-size: 1rem;
                  }
            }
        }

        .central-column:nth-child(2){
          margin: 0px auto 30px;
        }
`


const StyledTransactionCard = styled.div`

        
        width: 100%;
        height: 100px;
        margin: 10px;
        border-bottom: 2px solid var(--gray-color);
        padding-top: 15px;

        main {
            display: flex;
            align-items: center ;
            justify-content: space-between;
            
            .left section{
                display: flex;
                align-items: center;
                justify-content: flex-start;
                width: fit-content;
                

                span p{
                    display: flex;
                    justify-content: center;
                    align-items: flex-start ;
                    flex-flow: column nowrap;
                    h4 {
                        font-size: 1.2rem;
                        margin: 0 7px 7px;
                    }

                    time {
                        color: var(--gray-color);
                    }
                }
            }

            .right span {
                display: flex;
                flex-flow: column nowrap;
                align-items: flex-end;

                p {
                    font-size: 1.2rem;
                    font-weight: bolder;
                }
            }
        }
`


export { TransactionContainer, StyledTransactionCard }