import React from 'react'
import Image from 'next/image'

export default function Preloader() {
    const gifImage = `/onboadinglogo.png`

    return (
      <div style={{
          position: 'absolute', 
          zIndex: 1, 
          top: 0, 
          left: 0, 
          bottom: 0, 
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          background: "#134965"}}>
          <Image src={gifImage} width="320" height="250" alt=""/>
    </div>
  )
}
