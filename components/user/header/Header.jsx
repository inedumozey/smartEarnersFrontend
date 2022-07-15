import { Header } from "./styles"
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from 'next/image'
import Link from 'next/link';
import { MdClose, MdMenu} from 'react-icons/md';
import { ToggleMenu } from '../../../styles/globalStyle'
import SideMenu from "../sideMenu/SideMenu";
import { mobileAndTabletCheck } from "../../../utils/mobileAndTabletCheck";
import HomeIcon from '@mui/icons-material/Home';
import SavingsIcon from '@mui/icons-material/Savings';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PaidIcon from '@mui/icons-material/Paid';
import PersonIcon from '@mui/icons-material/Person';

const logo = '/onboadinglogo.png';


export default function Header_() {
    const [stick, setStick] = useState(false)
    const router = useRouter()
    const [showMenu, setShowMenu] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [currentPageName, setCurrentPageName] = useState({
        link: 'Profile',
        url: '/dashboard'
    },)

    useEffect(()=>{
        setIsMobile(mobileAndTabletCheck(window))
    }, [])

    const getCurrentPagename= ()=>{
        navLinks.find(link=>{
            if(link.url === router.asPath){
                setCurrentPageName(link)
            }
        })
    }
    
    useEffect(()=>{
        getCurrentPagename()

    }, [router])

    useEffect(()=>{
        window.onscroll=(e)=>{
            window.pageYOffset >= 120 ? setStick(true) : setStick(false)
        }
    }, [])    

    const navLinks =[
        {
            link: 'Profile',
            url: '/dashboard',
            icon: <PersonIcon />
        },
        {
            link: 'Deposit',
            url: '/dashboard/deposit',
            icon: <SavingsIcon />
        },
        {
            link: 'Withdrawals',
            url: '/dashboard/withdrawals',
            icon: <CreditScoreIcon />
        },
        {
            link: 'Transfer',
            url: '/dashboard/transfer',
            icon: <CurrencyExchangeIcon />
        },
        {
            link: 'Transactions',
            url: '/dashboard/transactions',
            icon: <PaidIcon />
        },
        {
            link: 'Referral',
            url: '/dashboard/referrals',
            icon: <PeopleAltIcon />
        }
    ]

    const bottomNavLinks =[
        {
            link: 'Profile',
            url: '/dashboard',
            icon: <PersonIcon />
        },
        {
            link: 'Deposit',
            url: '/dashboard/deposit',
            icon: <SavingsIcon />
        },
        {
            link: 'Withdrawals',
            url: '/dashboard/withdrawals',
            icon: <CreditScoreIcon />
        },
        {
            link: 'Transfer',
            url: '/dashboard/transfer',
            icon: <CurrencyExchangeIcon />
        },
        {
            link: 'Transactions',
            url: '/dashboard/transactions',
            icon: <PaidIcon />
        },
        {
            link: 'Referral',
            url: '/dashboard/referrals',
            icon: <PeopleAltIcon />
        }
    ]


  return (
    <Header isMobile={isMobile} stick={stick}>
        
        {/* Check viewing browser */}

        {
            isMobile ?
            (
                // mobile view
                <>
                    {/* header nav*/}
                    <div className="mobile-screen-view">
                        {/* toggle menu */}
                        <div className="col1 toggle-menu">
                            <Link href='/' passHref>
                                <a style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                    <div><HomeIcon /></div>
                                    <div>HOME</div>
                                </a>
                            </Link>
                        </div>

                        {/* logo */}
                        <div className="col2 logo">
                            <Link href='/' passHref>
                                <a><Image width='100' height='100' src={logo} alt="" /></a>
                            </Link>
                        </div>

                        {/* current page name */}
                        <div onClick={()=>router.push(`/${currentPageName.url}`)} className='col3 current-page-name'>
                            {currentPageName.link}
                        </div>
                    </div>

                    {/* bottom nav */}
                    <div className="bottom-nav">
                        {
                            bottomNavLinks.map((link, i)=>{
                                return (
                                    <div key={i}>
                                        <Link href={link.url} passHref>
                                            <a className="linkWrapper">
                                                <div className={link.url === router.asPath ? 'active-icon link-icon' : 'link-icon'}>
                                                    {link.icon}
                                                </div>
                                                <div className={link.url === router.asPath ? 'active-link link' : 'link bottom-link'}>
                                                    {link.link}
                                                </div>
                                            </a>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </>
            ):
            (
                // Desktop view
                <>
                    <div className="larger-screen-view">
                        {/* logo */}
                        <div className="col1 logo">
                            <Link href='/' passHref>
                                <a><Image width='100' height='100' src={logo} alt="" /></a>
                            </Link>
                        </div>

                        {/* nav links */}
                        <div className="col2">
                            <div className="navLink">
                            {
                                navLinks.map((link, i)=>{
                                    return (
                                        <div className="navLinkWrapper" key={i}>
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

                        {/* current page name */}
                        <div onClick={()=>router.push(`/${currentPageName.url}`)} className='col3 current-page-name'>
                            {currentPageName.link}
                        </div>
                    </div>
                    

                    {/* View on Window resized to max of 920px */}
                    <div className="smaller-screen-view">
                        {/* toggle menu */}
                        <div className="col1 toggle-menu">
                            <ToggleMenu onClick={()=>setShowMenu(!showMenu)} className="togglemenu-wrapper">
                                {
                                    showMenu ? <MdClose className='togglemenu'/> : <MdMenu className='togglemenu'/>
                                }
                            </ToggleMenu>
                        </div>

                        {/* logo */}
                        <div className="col2 logo">
                            <Link href='/' passHref>
                                <a><Image width='100' height='100' src={logo} alt="" /></a>
                            </Link>
                        </div>

                        {/* current page name */}
                        <div onClick={()=>router.push(`/${currentPageName.url}`)} className='col3 current-page-name'>
                            {currentPageName.link}
                        </div>
                    </div>

                    <SideMenu navLinks={navLinks} showMenu={showMenu} setShowMenu={setShowMenu} />
                </>
            )
        }

    </Header>
  )
}
