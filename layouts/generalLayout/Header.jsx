import Image from 'next/image'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import Link from 'next/link';
import {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '../../components/auth/redux/auth';
import {useRouter} from 'next/router';
import { MdClose, MdMenu} from 'react-icons/md';
import check from '../../utils/';
import { ToggleMenu } from '../../styles/globalStyle'
import { Router } from '@mui/icons-material';
import MobileMenu_ from '../../components/Mobile/MobileMenu';
import { flexbox } from '@mui/system';
import { mobileAndTabletCheck } from '../../utils/userAgent';

const logo = '/onboadinglogo.png';

import {
    TopNav,
    MidNav,
    MobileMenuRow1,
    MobileMenuRow2,
    MobileMenuRow3,
} from '../mainLayout/headerStyles'


;

export default function Header_() {
    const dispatch = useDispatch()
    const [stick, setStick] = useState(false)
    const router = useRouter()
    const [showMenu, setShowMenu] = useState(false)


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
            link: 'About Us',
            url: '/about-us'
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
            link: 'Terms and Conditions',
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

    const slidingItems = [
        {
            title: 'Title one',
            dsc: 'lorem ipson',
        },
        {
            title: 'Title two',
            dsc: 'lorem ipson',
        },
        {
            title: 'Title three',
            dsc: 'lorem ipson',
        },
        {
            title: 'Title four',
            dsc: 'lorem ipson',
        }
    ]

    useEffect(()=>{
        for(let navLink of navLinks){
            if(navLink === router.asPath){
                console.log(navLink)
            }
        }
    }, )

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
            {
                stick ? '' :
                (
                    <div className="nav-btn">
                        {
                            check.isLoggedIn() ? 
                            (
                                <>
                                    <Link href='/signin' passHref>
                                        <a onClick={dispatch(logout())} className='signup' >Logout</a>
                                    </Link>
                                </>
                            ):
                            (
                                <>
                                    <Link href='/signup' passHref>
                                        <a className='signup'>Sign Up</a>
                                    </Link>
                                    <Link href='/signin' passHref>
                                        <a className='signin'>Sign in</a>
                                    </Link>
                                </>
                            )
                        }
                    </div>
                )
            }
            
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
                {
                    !stick ? '' :
                    (
                        <div className="nav-btn">
                            {
                                check.isLoggedIn() ? 
                                (
                                    <>
                                        <Link href='/signin' passHref>
                                            <a onClick={dispatch(logout())} className='signup' >Logout</a>
                                        </Link>
                                    </>
                                ):
                                (
                                    <>
                                        <Link href='/signup' passHref>
                                            <a className='signup'>Sign Up</a>
                                        </Link>
                                        <Link href='/signin' passHref>
                                            <a className='signin'>Sign in</a>
                                        </Link>
                                    </>
                                )
                            }
                        </div>
                    )
                }
            </div>
            <marquee className="bottom-mid-nav">
                hello
            </marquee>
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
                                        <a>
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
                    <div className="nav">
                        <div className="nav-btn">
                            {
                                check.isLoggedIn() ? 
                                (
                                    <>
                                        <Link href='/signin' passHref>
                                            <a onClick={dispatch(logout())} className='signup' >Logout</a>
                                        </Link>
                                    </>
                                ):
                                (
                                    <>
                                        <Link href='/signup' passHref>
                                            <a className='signup'>Sign Up</a>
                                        </Link>
                                        <Link href='/signin' passHref>
                                            <a className='signin'>Sign in</a>
                                        </Link>
                                    </>
                                )
                            }
                        </div>
                    </div>
                    <div className="copyright">
                        &copy; {new Date().getFullYear() > 2022 ? '2021 - ' + new Date().getFullYear() : 2022} Smart Earners
                    </div>
                </MobileMenuRow3>
            </div>
        </MobileMenu_>
        
        </>

    )
}