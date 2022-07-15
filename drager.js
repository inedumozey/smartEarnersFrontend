import React, { useState, useRef, useContext } from 'react';
import DocForm from './DocForm';
import Close from './Close';
import { GlobalState } from '../App';

function FormModel({}) {
    const globalState = useContext(GlobalState)

    let docFormWrapperRef = useRef();
    let addDocModalRef = useRef();

    const [ dragging, setDragging ] = useState(false)

    function startDrag(){
        setDragging(true)
        addDocModalRef.current.style.cursor = 'ew-resize'
    }
    function drag(e){
        if(dragging){
            if(e.clientX > 250 && e.clientX < addDocModalRef.current.clientWidth - 100){
                addDocModalRef.current.style.cursor = 'ew-resize';
                docFormWrapperRef.current.style.width = (e.clientX + 10) + 'px'
            }
        }
    }
    function stopDrag(){
        addDocModalRef.current.style.cursor = 'default'
        setDragging(false)
    }

    function closeFormModal(e){
        if(e.target === e.currentTarget){
            globalState.setFormModal(false)
        }
    }

    return (
        <div
            ref={addDocModalRef}
            onMouseUp={stopDrag}
            onMouseMove={drag}
            onClick={closeFormModal}
            className='modal'

        >
            <div
                ref={docFormWrapperRef}
                className='docFormWrapper'>
                <div
                    onMouseDown={startDrag}
                    className={dragging ? 'handle dragging' : 'handle'}>
                </div>
                <DocForm />
                <Close close={closeFormModal} />
            </div>
        </div>
    );
}