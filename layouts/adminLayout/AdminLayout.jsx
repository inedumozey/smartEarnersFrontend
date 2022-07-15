import React, {useRef, useState} from 'react'
import Header_ from '../../components/admin/header/Header';
import styled from 'styled-components';
import SideMenu_ from '../../components/admin/sideMenu/SideMenu';
import { ScrollBar } from '../../styles/globalStyle';
ScrollBar


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
  padding-right: 100px;
  position: fixed;
`

const TopFlap = styled.div`
  width: 50px;
  height: 100%;
  position: absolute;
  overflow-x: hidden;
  white-space: nowrap;
  top: 0;
  left: 0;
  z-index: 1;
  background: ${({toggleState})=>toggleState ? '#fff' : '#000'};
  box-shadow: 0px 4px 4px 2px #706a6a;
  bottom: 0;

  ${ScrollBar()}

  .handle {
    position: absolute;
    width: 8px;
    height: 100%;
    right: 0;
    bottom: 0;
    cursor: ew-resize
  }

  .dragging{
    border-right: 3px solid var(--major-color-purest);
  }
`

const BottomFlap = styled.div`
  width: 100%;
  padding-left: 52px;
  height: 100%;
  position: absolute;
  background: ${({toggleState})=>toggleState ? '#fff' : '#000'};
  top: 0;
  right: 0;
  bottom: 0;

  ${ScrollBar()}
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
        const width = e.clientX;
        if(dragging) topFlapRef.current.style.width = `${width}px`
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
        const width = e.clientX;
        if(dragging) topFlapRef.current.style.width = `${width}px`
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
          <TopFlap toggleState={toggleState} ref={topFlapRef} >
            <div
              onMouseDown={startDragMouse}
              onTouchStart={startDragTouch}
              className={dragging ? 'handle dragging' : 'handle'}
              >
            </div>
            <SideMenu_ />
          </TopFlap>

          <BottomFlap toggleState={toggleState}>
            {children}
          </BottomFlap>    

        </Main>   
      </>
    )
}
