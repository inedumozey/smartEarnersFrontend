import React from 'react'
import Image from 'next/Image'

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
        background: "#134965"}}>
        <Image src={`/onboadinglogo.png`} width="320" height="250" alt=""/>
    
  </div>
  )
}
