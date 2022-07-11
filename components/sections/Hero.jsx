import HeroContainer  from '../styles/hero'
import Link from 'next/link'
import Image from 'next/image'
import { Button,
    SectionWrapper,
    Section,
    SectionTitle,
    SectionSubTitle,
    SectionText,
} from '../../styles/globalStyle'


const Hero = () => {

    return (
        <SectionWrapper>
            <Section>
                <SectionTitle>Smart Earner Currency</SectionTitle>
                <SectionSubTitle>We Trade it, You Learn & Earn it</SectionSubTitle>
                <SectionText>
                    SmartEarner is a trustworthy platform that has been in existence for years serving several financial institutions across the world.
                </SectionText>
            
                <Button>Invest Now</Button>
            </Section>
    
            <Section>
                    <Image src={"/hero.png"} alt="Hero" width="350" height="250"/>
            </Section>
    
        </SectionWrapper>
    )
}
export default Hero