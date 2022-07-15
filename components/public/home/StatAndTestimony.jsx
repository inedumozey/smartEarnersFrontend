import PersonIcon from '@mui/icons-material/Person'
import SavingsIcon from '@mui/icons-material/Savings';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import StarIcon from '@mui/icons-material/Star'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {useSnap} from '@mozeyinedu/hooks-lab';

import Spinner from '../../../loaders/Spinner';
import { getSelectedTestimonials, remove } from '../../../redux/testimonials/testimonials';

import {Swiper, SwiperSlide } from 'swiper/react'
import Avatar from 'react-avatar';
import {useInView} from 'react-intersection-observer';
import styled from 'styled-components';
import moment from 'moment';

import {
    Navigation,
    Pagination,
    Scrollbar, 
    A11y,
    Autoplay
} from "swiper/core";

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { EffectFade } from 'swiper';

import {
    HeroSectionWrapper,
    HeroSection,
    HeroSectionTitle,
    HeroSectionSubTitle,
} from './styles'



const CardWrapper = styled.div`
    width: 40vw;
    height: 80%;

    .swipper{
        width: 100%;
        height: 100%;
    }

    div {
        margin: 3px
    }

    @media (max-width: 800px){
        width: 80vw;
    }
`

const Card1 = styled.div`
    width: 95%;
    height: 95%;
    position: relative;

    .actions{
        position: absolute;
        top: 20px;
        left: 30px;
        width: 30px;
        display: flex;
        align-items: center;
        flex-direction: column;
        display: none;

        .del {
            color: #dd2900;
            cursor: pointer;
            margin: 5px;

            &:hover{
                opacity: .5
            }
        }

        .remove {
            color: var(--bright-color);
            cursor: pointer;
            margin: 5px;

            &:hover{
                opacity: .5
            }
        }
    }

    &:hover .actions{
        display: block;
    }

`

const Card2 = styled.div`
    width: 50vw;
    height: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .card-items {
        width: 170px;
        height: 170px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    @media (max-width: 800px){
        width: 80vw;
    }
`

export default function StatAndTestimony() {
    const dispatch = useDispatch()
    const state = useSelector(state=>state)
    const {selectedTestimonials} = state.testimonial

    useEffect(()=>{
        dispatch(getSelectedTestimonials())
    }, [])

    return (
        <HeroSectionWrapper style={{justifyContent: 'center', cursor: 'default'}}>

            <HeroSection style={{height: '75vh', background: '#00415D30'}}>
                <HeroSectionTitle style={{textAlign: 'left'}}>Testimonials</HeroSectionTitle>

                <CardWrapper>
                    {/* check if selectedTestimonials exist */}
                    {
                    selectedTestimonials && selectedTestimonials.isLoading ? 
                    (
                        // set loading div
                        <div>
                            <Spinner />
                        </div>
                    ):
                    (
                        // display data, first check if empty
                        selectedTestimonials.data.length < 1 ?
                        (
                            <div style={{textAlign: 'center'}}>No data currently available</div>
                        ):
                        (
                            <Swiper
                                className='swipper'
                                modules={[Navigation, EffectFade, Autoplay, Pagination, Scrollbar, A11y]}
                                loop
                                scrollbar={{draggable: true}}
                                autoplay = { {delay: 4000}}
                                pagination = {{ clickable: true}}
                                effect="creative">
                                
                                {selectedTestimonials.data.map(data => {
                                    return (
                                        <SwiperSlide key={data._id}>
                                            <Card_1 data={data}/>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        )
                    )
                    }
                    
                </CardWrapper>

            </HeroSection>

            <HeroSection style={{height: '75vh', background: '#7da0af'}}>
                <HeroSectionTitle style={{textAlign: 'left'}}>Statistics</HeroSectionTitle>
                <Card_2 />
            </HeroSection>

        </HeroSectionWrapper>
    )
}

function Card_1({data}){
    const {snap} = useSnap(.5)
    const dispatch = useDispatch()

    const handleDelete =(id)=>{
        console.log('delete this: ', id)
    }


    return (
        <Card1>

            <Avatar style={{userSelect: 'none'}} src='/me.jpg' size="180" round={true}/>
            <div style={{textAlign: 'center'}}>{data.body}</div>
            <HeroSectionSubTitle>{data.name}</HeroSectionSubTitle>
            <div style={{color: '#F1AD00'}}>{moment(data.date).calendar()}</div>           
            <div className="actions">
                <DeleteForeverIcon onClick={()=>handleDelete(data._id)} className='del'/>
                <DoDisturbOnIcon onClick={()=>dispatch(remove(data._id))} className='remove'/>
            </div>
        </Card1>
    )
}

function Card_2(){
    const {ref, inView} = useInView()

    const [count, setCount] = useState(0)
    const [max] = useState(623772)

    useEffect(()=>{

        if(inView){
            
            setInterval(()=>{
                if(count < max){
                    setCount(count=>count += 84684)
                }
                else{
                    setCount(max)
                }

            }, .0005)
        }
        else{
            setCount(0)
        }        

    }, [count, inView])


    return (
        <Card2 ref={ref}>

            <div>
                <div className='card-items'>
                    <div style={{color: '#fff'}}>
                        <PersonIcon fontSize="large"/>
                    </div>
                    <HeroSectionSubTitle>Total Members</HeroSectionSubTitle>
                    <HeroSectionSubTitle style={{color: '#fff'}}>{count}</HeroSectionSubTitle>
                </div>

                <div className='card-items'>
                    <div style={{color: '#fff'}}>
                        <SavingsIcon fontSize="large"/>
                    </div>
                    <HeroSectionSubTitle>Total Investors</HeroSectionSubTitle>
                    <HeroSectionSubTitle style={{color: '#fff'}}>7232</HeroSectionSubTitle>
                </div>

            </div>

            <div>
                <div className='card-items'>
                    <div style={{color: '#fff'}}>
                        <AttachMoneyIcon fontSize="large"/>
                    </div>
                    <HeroSectionSubTitle>Total SEC Paid</HeroSectionSubTitle>
                    <HeroSectionSubTitle style={{color: '#fff'}}>9721</HeroSectionSubTitle>
                </div>
                
                <div className='card-items'>
                    <div style={{color: '#fff'}}>
                        <StarIcon style={{color: '#F1AD00'}} fontSize="small"/>
                        <StarIcon style={{color: '#F1AD00'}} fontSize="small"/>
                        <StarIcon style={{color: '#F1AD00'}} fontSize="small"/>
                        <StarIcon style={{color: '#F1AD00'}} fontSize="small"/>
                        <StarIcon style={{color: '#ccc'}} fontSize="small"/>
                    </div>
                    <HeroSectionSubTitle>Rating</HeroSectionSubTitle>
                    <HeroSectionSubTitle style={{color: '#fff'}}>4</HeroSectionSubTitle>
                </div>
            </div>

        </Card2>
    )
}