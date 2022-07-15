import React, {useRef, useState} from 'react'
import Header_ from '../../components/admin/header/Header';
import styled from 'styled-components';
import SideMenu_ from '../../components/admin/sideMenu/SideMenu';


const Header = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  right: 0;
  height: 60px;
  background: var(--major-color-purest)
`
const Main = styled.div`
  width: 100%;
  height: calc(100vh - 55px);
  left: 0;
  right: 0;
  z-index: 1;
  top: 55px;
  position: fixed;
`

const BottomFlap = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: ${({toggleState})=>toggleState ? '#fff' : '#000'};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const TopFlap = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 8px;
  position: absolute;
  top: 0;
  left: 40px;
  background: ${({toggleState})=>toggleState ? '#fff' : '#000'};
  box-shadow: 0px 0px 4px 2px #706a6a;
  right: 0;
  bottom: 0;

  .handle {
    position: absolute;
    width: 8px;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    cursor: ew-resize
  }

  .dragging{
    border-left: 3px solid var(--major-color-purest);
  }
`

export default function AdminLayout({children, toggleState}) {
    const topFlapRef = useRef()
    const mainRef = useRef()
    const [ dragging, setDragging ] = useState(false)

    function startDragMouse(){
        setDragging(true)
        mainRef.current.style.cursor = 'ew-resize'
    }

    function dragMouse(e){
        const left = e.clientX;
        if(dragging) topFlapRef.current.style.left = `${left}px`
    }

    function stopDragMouse(){
        mainRef.current.style.cursor = 'default'
        setDragging(false)
    }

    function startDragTouch(){
        setDragging(true)
        mainRef.current.style.cursor = 'ew-resize'
    }

    function dragTouch(e){
        const left = e.touches[0].clientX
        if(dragging) topFlapRef.current.style.left = `${left}px`
    }

    function stopDragTouch(){
        mainRef.current.style.cursor = 'default'
        setDragging(false)
    }

    return (
      <>
        <Header>
          <Header_ />
        </Header>

        <Main
          ref={mainRef}
          onMouseUp={stopDragMouse}
          onMouseMove={dragMouse}

          onTouchEnd={stopDragTouch}
          onTouchMove={dragTouch}
          >
          <BottomFlap toggleState={toggleState}>
            <SideMenu_ />
          </BottomFlap>
          <TopFlap toggleState={toggleState} ref={topFlapRef}>
            <div
              onMouseDown={startDragMouse}
              onTouchStart={startDragTouch}
              className={dragging ? 'handle dragging' : 'handle'}>
            </div>
              {children}
          </TopFlap>    
        </Main>   
      </>
    )
}
