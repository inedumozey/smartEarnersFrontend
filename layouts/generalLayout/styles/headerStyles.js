import styled from 'styled-components';

const TopNav = styled.div`
    height: 115px;
    background: blue;
`
const MidNav = styled.div`
    height: 25px;
    background: red;
`
const BottomNav = styled.div`
    height: 60px;
    position: ${({sticky})=>sticky ? 'fixed' : ''};
    top: ${({sticky})=>sticky ? 0 : ''};
    background: ${({sticky})=>sticky ? 'red' : 'green'};
    z-index: 1;
`

export {
    TopNav,
    MidNav,
    BottomNav,
}