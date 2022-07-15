import Image from 'next/image'
import {
    HeroSectionWrapper,
    HeroSection,
    HeroButton,
    HeroSectionTitle,
    HeroSectionSubTitle,
    HeroSectionText,
    CardWrapper,
    LandscapeCard,
    ImageCard
} from './styles'

const Partners = () => {
  return (
    <>
      <HeroSectionWrapper>
        <HeroSection>
          <HeroSectionTitle>Partners</HeroSectionTitle>
          <HeroSectionSubTitle>We never move alone, over the years we have created and manage relationship with key strategic partners</HeroSectionSubTitle>
        </HeroSection>
      </HeroSectionWrapper>

      <HeroSectionWrapper style={{marginTop: '-100px'}}>
        <HeroSection>
          <CardWrapper>

            <ImageCard>
              <Image src={"/trademarks/ilimi.africa.png"}  width="100" height="100" alt="" />
            </ImageCard>

            <ImageCard>
              <Image src={"/trademarks/JS.png"}  width="100" height="100" alt="" />
            </ImageCard>

            <ImageCard>
              <Image src={"/trademarks/python.png"}  width="100" height="100" alt="" />
            </ImageCard>

            <ImageCard>
              <Image src={"/trademarks/copen.png"}  width="100" height="100" alt="" />
            </ImageCard>
            
          </CardWrapper>
        </HeroSection>
      </HeroSectionWrapper>
    </>
  )
}

export default Partners