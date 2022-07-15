import styled from 'styled-components'

const SideMenuModal_ = styled.div`
    background: rgba(0,0,0,.6);
    z-index: 1000000000;
    transition: all .6s;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    opacity: ${({show})=>show ? 1 : 0};
    visibility: ${({show})=>show ? 'visible' : 'hidden'};

    @media (min-width: 920px){
      display: none;
  }
`

const SideMenuModalContainer = styled.div`
    background: var(--major-color-purest);
    transition: all .5s;
    transform: translateX(${({show})=>show ? 0 : '-150%'});
    position: fixed;
    top: ${({top})=>top};
    bottom: 0;
    width: ${({width})=>width};
    left: 0;

    .content{
      transition: all .4s;
      opacity: ${({show})=>show ? 1 : 0};
      visibility: ${({show})=>show ? 'visible' : 'hidden'};
      width: 100%;
      height: 100%;
    }
`

export {
    SideMenuModal_,
    SideMenuModalContainer,
}