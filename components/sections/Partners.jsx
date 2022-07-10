import React from 'react'
import Image from 'next/image'
import PartnersContainer from '../styles/partners'

const Partners = () => {
  return (
    <PartnersContainer>
        <header> Partners </header>
        <p>We never move alone, over the years we have created and manage relationship with key strategic partners </p>
        <section className="partners-brandmark-box">
            <ul>
                <li>
                    <Image src={"/trademarks/ilimi.africa.png"}  width="100" height="100" alt="" />
                    <p> E-limi LMS</p>    
                </li>
                <li>
                    <Image src={"/trademarks/JS.png"}  width="100" height="100" alt="" />
                    <p> ECMA Community</p>
                </li>
                <li>
                    <Image src={"/trademarks/python.png"}  width="100" height="100" alt="" />
                    <p> Python Community</p>
                </li>
                <li>
                    <Image src={"/trademarks/copen.png"}  width="100" height="100" alt="" />
                    <p> Copen Inc.</p>    
                </li>
            </ul>
        </section>
    </PartnersContainer>
  )
}

export default Partners