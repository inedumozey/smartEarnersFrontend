import styled from 'styled-components'

const PolicyContainer = styled.div`
    width: 100%;
    min-height: 1100vh;
    text-align: justify;

    .inner-layer {
        width: 80%;
        margin: 0px auto;
        padding-top: 150px;
    }

    .accept-statement {
      margin: 3rem auto;
      font-size: 1.2rem;
      text-align: center;
      color: #606060;
    }

    .write-ups{
      width: 100%;
      margin: 0rem auto;
      font-size: 1.2rem;
      text-align: justify;

      p{
        color: #606060;
        margin: 1.5rem;
      }
      ul li{
        list-style-type: square;
        margin: 18px;
      }
    }
`

export default PolicyContainer