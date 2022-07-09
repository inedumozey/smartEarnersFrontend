import HeroContainer  from '../styles/hero'
import Link from 'next/link'
import Image from 'next/image'


const Hero = () => {

    return (
        <HeroContainer>
            <div className='hero'>
            <section className='left'>
                
                <h3>Smart Earner Currency</h3>
                <h6>We Trade it, You Learn & Earn it</h6>
                <p>SmartEarner is a trustworthy platform that has been in existence for years serving several financial institutions across the world.</p>
            
                <button>Invest Now</button>
            </section>
    
            <section className='right'>
                    <Image src={"/hero.png"} alt="Hero" width="350" height="250"/>
            </section>
    
            </div>
    
            {/* <Link href="/admin">
                <a>Go to Admin</a>
            </Link> */}
    
        </HeroContainer>
    )
}
export default Hero