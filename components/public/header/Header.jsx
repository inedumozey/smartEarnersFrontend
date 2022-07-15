import Image from 'next/image'
import Link from 'next/link';
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router';
import { MdClose, MdMenu} from 'react-icons/md';
import { ToggleMenu } from '../../../styles/globalStyle'
import NavAuthBtn from './NavAuthBtn'
import SideMenu from '../sideMenu/SideMenu';
import HomeIcon from '@mui/icons-material/Home';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import BalanceIcon from '@mui/icons-material/Balance';
import HelpIcon from '@mui/icons-material/Help';

const logo = '/onboadinglogo.png';
import {
    TopNav,
    MidNav,
} from './styles';

export default function Header_() {
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
            url: '/',
            icon: <HomeIcon />
        },
        {
            link: 'Contact Us',
            url: '/contact-us',
            icon: <PermContactCalendarIcon />
        },
        {
            link: 'How it Works',
            url: '/user-manual',
            icon: <MenuBookIcon />
        },
        {
            link: 'Terms',
            url: '/tc',
            icon: <LocalPoliceIcon />
        },
        {
            link: 'Privacy Policy',
            url: '/policy',
            icon: <BalanceIcon />
        },
        {
            link: 'FAQ',
            url: '/faq',
            icon: <HelpIcon />
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

                { stick ? '' : <NavAuthBtn stick={stick} /> }
                
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

                    { !stick ? '' : <NavAuthBtn stick={stick} /> }
                </div>
                
                <div className="bottom-mid-nav" >
                    <marquee behavior="smooth" direction="" style={{fontSize: '.8rem'}}>
                    <span style={{color: 'gold'}}>Hello! </span><span>--- Welcome to SmartEarners Investment. --- </span><span style={{color: 'gold'}}>We Trade it, You Learn & Earn it</span>
                    </marquee>
                </div>
                
            </MidNav>
        
            <SideMenu navLinks={navLinks} showMenu={showMenu} setShowMenu={setShowMenu} />
        
        </>
    )
}