import React from 'react'

export default function ScreenLoader() {
  return (
    <div style={{
        position: 'absolute', 
        zIndex: 1100, 
        top: 0, 
        left: 0, 
        bottom: 0, 
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        background: 'rgb(0, 65, 93)'}}>

      <img src={`/logo.png.ico`} alt="" />
  </div>
  )
}
