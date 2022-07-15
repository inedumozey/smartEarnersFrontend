import FortIcon from '@mui/icons-material/Fort';
import check from '../../../utils'
import {useSnap} from '@mozeyinedu/hooks-lab'


import {
    HeroSectionTitle,
    HeroSectionSubTitle,
    HeroSectionText,
} from './styles'

import styled from 'styled-components'
import { Button } from '../../../styles/globalStyle';
import { useRouter } from 'next/router';

const Card = styled.div`
    height: 400px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: #fff;
    z-index: 200303;
    align-items: center;
    user-select: none;
    --webkit-user-select: none;
    background: ${({bg})=>bg};
`
const Btn = styled(Button)`
  box-shadow: 2px 2px 3px #fff, -2px -2px 3px #fff;
  &:hover{
    color: #fff;

`
const bg=[
  '#9ea36d',
  '#7da0af',
  '##8ad5d1',
  '#7da0af',
  '#00415D30',
  '#00467D30'
]


export default function PlanCards({data, i}) {
  const {snap} = useSnap(.5)
  const router = useRouter()

  //the lifespan of the plans come in second, this function convert second to days (60*60*24 === 1 day)
 const resolveLifespan = (sec)=>{

    const lifeSpanInSecond = ()=>{
      return `${Math.floor(Number(sec))}  Second${Math.floor(Number(sec)) > 1 ? 's' : ''} Investment Duration`
    }

    const lifeSpanInMinute = ()=>{
      return `${Math.floor(Number(sec) / 60)}  Second${Math.floor(Number(sec) / 60) > 1 ? 's' : ''} Investment Duration`
    }

    const lifeSpanInHour = ()=>{
      return `${Math.floor(Number(sec) / 60 * 60)}  Second${Math.floor(Number(sec) / 60 * 60) > 1 ? 's' : ''} Investment Duration`
    }

    const lifeSpanInDay = ()=>{
      return `${Math.floor(Number(sec) / 60 * 60 * 24)}  Second${Math.floor(Number(sec) / 60 * 60 * 24) > 1 ? 's' : ''} Investment Duration`
    }

    // returns seconds
    if(sec < 60){
      return lifeSpanInSecond()
    }

    // returns minutes
    if(sec >= 60 && sec < 60 * 60){
      return lifeSpanInMinute()
    }

    // returns hours
    if(sec >= 60 * 60 && sec < 60 * 60 * 24){
      return lifeSpanInHour
    }

    // returns days
    if(sec >= 60 * 60 * 24){
      return lifeSpanInDay
    }
 }

  return (
    <Card bg={bg[i]} color={bg[bg.length - i]}>
      <FortIcon />

      <HeroSectionTitle>{data.type.toUpperCase()}</HeroSectionTitle>

      <HeroSectionSubTitle>
        <span>{data.amount}</span>{" "}<span>{data.currency}</span>
      </HeroSectionSubTitle>

      <HeroSectionSubTitle>{data.returnPercentage}% ROI</HeroSectionSubTitle>

      <HeroSectionText style={{fontWeight: '500'}}>{resolveLifespan(data.lifespan)}</HeroSectionText>
  
      <Btn {...snap()} onClick={()=>check.isLoggedIn() ? router.push(`/dashboard/investment/${data.id}`) : router.push('/signin')}>INVEST</Btn>
    </Card>
  )
}
