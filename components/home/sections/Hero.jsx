import Link from 'next/link'
import Image from 'next/image'
import {useSnap} from '@mozeyinedu/hooks-lab'
import {
    HeroSectionWrapper,
    HeroSection,
    HeroSectionTitle,
    HeroSectionSubTitle,
    HeroSectionText,
} from '../styles'
import { Button } from '@mui/material'


const Hero = () => {
    const {snap} = useSnap(.5)

    return (
        <HeroSectionWrapper bg='#00415D30'>
            <HeroSection>
                <HeroSectionTitle>SmartEarners' <span>Investment</span></HeroSectionTitle>
                <HeroSectionSubTitle>We Trade it, You Learn & Earn it</HeroSectionSubTitle>
                <HeroSectionText>
                    SmartEarner is a trustworthy platform that has been in existence for years serving several financial institutions across the world.
                </HeroSectionText>
            
                <Link href="/">
                    <a {...snap()}>
                        <Button>Invest Now</Button>
                    </a>
                </Link>
            </HeroSection>
    
            <HeroSection>
                    <Image src={"/hero.png"} alt="Hero" width="350" height="250"/>
            </HeroSection>    
        </HeroSectionWrapper>
    )
}
export default Hero