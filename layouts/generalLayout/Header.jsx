import Image from 'next/image'
import Link from 'next/link';
import {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '../../components/auth/redux/auth';
import {useRouter} from 'next/router';
import { MdClose, MdMenu} from 'react-icons/md';
import check from '../../utils/';
import { ToggleMenu, CopyRight, MovingInfoWrapper } from '../../styles/globalStyle'
import MobileMenu_ from '../../components/Mobile/MobileMenu';
const logo = '/onboadinglogo.png';
import NavBtn_ from './NavBtn';

import {
    TopNav,
    MidNav,
    MobileMenuRow1,
    MobileMenuRow2,
    MobileMenuRow3,
} from './headerStyles'


export default function Header_() {
    const dispatch = useDispatch()
    const [stick, setStick] = useState(false)
    const router = useRouter()
    const [showMenu, setShowMenu] = useState(false)

    const closeMenu =(e)=>{
        e.stopPropagation();
        setShowMenu(false)
    }

    useEffect(()=>{
        window.onscroll=(e)=>{
            window.pageYOffset >= 120 ? setStick(true) : setStick(false)
        }
    }, [])    

    const navLinks =[
        {
            link: 'Home',
            url: '/'
        },
        {
            link: 'Contact Us',
            url: '/contact-us'
        },
        {
            link: 'How it Works',
            url: '/user-manual'
        },
        {
            link: 'Terms',
            url: '/tc'
        },
        {
            link: 'Privacy Policy',
            url: '/policy'
        },
        {
            link: 'FAQ',
            url: '/faq'
        },
    ]

    return (
        <>
        <TopNav>
            {/* toggle menu */}
            {
                stick ? '' :
                (
                <ToggleMenu onClick={()=>setShowMenu(!showMenu)} className="togglemenu-wrapper">
                    {
                        showMenu ? <MdClose className='togglemenu'/> : <MdMenu className='togglemenu'/>
                        
                    }
                </ToggleMenu>
                )
            }

            {/* logo */}
            {
                stick ? '' :
                (
                <div className="logo">
                    <Link href='/' passHref>
                        <a><Image width='100' height='100' src={logo} alt="" /></a>
                    </Link>
                </div>
                )
            } 

            {/* signup, signup, logout and dashboard btns*/}

            { stick ? '' : <NavBtn_ stick={stick} /> }
            
        </TopNav>

        <MidNav stick={stick}>
            <div className="top-mid-nav">
                 {/* toggle menu */}
                {
                    !stick ? '' :
                    (
                    <ToggleMenu onClick={()=>setShowMenu(!showMenu)} className="togglemenu-wrapper">
                        {
                            showMenu ? <MdClose className='togglemenu'/> : <MdMenu className='togglemenu'/>
                            
                        }
                    </ToggleMenu>
                    )
                }

                {/* logo */}
                {
                    !stick ? '' :
                    (
                    <div className="logo-midNav">
                        <Link href='/' passHref>
                            <a><Image width='100' height='100' src={logo} alt="" /></a>
                        </Link>
                    </div>
                    )
                }

                <div className='navLinkWrapper'>
                    <div className="navLink">
                    {
                        navLinks.map((link, i)=>{
                            return (
                                <div id='active' key={i}>
                                    <Link href={link.url} passHref>
                                        <a>
                                            <div className={link.url === router.asPath ? 'active link' : 'link'}>{link.link}</div>
                                        </a>
                                    </Link>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
                {/* signup, signup, logout and dashboard btns for sticky menu*/}

                { !stick ? '' : <NavBtn_ stick={stick} /> }
            </div>
            
            <div className="bottom-mid-nav" >
                <marquee behavior="smooth" direction="" style={{fontSize: '.8rem'}}>
                <span style={{color: 'gold'}}>Hello! </span><span>--- Welcome to SmartEarners Investment. --- </span><span style={{color: 'gold'}}>We Trade it, You Learn & Earn it</span>
                </marquee>
            </div>
            
        </MidNav>
       
        <MobileMenu_ showMenu={showMenu} setShowMenu={setShowMenu}>
            <div className="content">
                <MobileMenuRow1>
                    <div className="logo">
                        <Link href='/' passHref>
                            <a><Image width='100' height='100' src={logo} alt="" /></a>
                        </Link>
                    </div>
                </MobileMenuRow1>

                <MobileMenuRow2>
                    <div className="navLink">
                    {
                        navLinks.map((link, i)=>{
                            return (
                                <div key={i}>
                                    <Link href={link.url} passHref>
                                        <a  onClick={closeMenu}>
                                            <div className={link.url === router.asPath ? 'active link' : 'link'}>{link.link}</div>
                                        </a>
                                    </Link>
                                </div>
                            )
                        })
                    }
                    </div>
                </MobileMenuRow2>

                <MobileMenuRow3>
                    <div style={{color: '#fff', background: 'gild'}} className="nav">
                        <NavBtn_ location={'mobileView'}/>
                    </div>
                    <CopyRight className="copyright">
                        &copy; {new Date().getFullYear() > 2022 ? '2021 - ' + new Date().getFullYear() : 2022} Smart Earners
                    </CopyRight>
                </MobileMenuRow3>
            </div>
        </MobileMenu_>
        
        </>

    )
}