import Image from 'next/image'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import Link from 'next/link';
import {useState} from 'react'


// const BRAND_COLOR_B = 'rgb(241, 173, 0)';
const BRAND_COLOR_A = ' #00415D'
const logo = '/logo.png';

import {
    Nav,
    User,
    UserAction,
    Dashboard,
    TopNav,
    BottomNav
} from './styles'

export default function Header() {
    const [loggedIn, setLoggedIn] = useState(false)

return (
    <Nav bg={BRAND_COLOR_A}>
        <TopNav>
            <div className='top-nav-container'>
                <ul>
                    <li><Link href="https://facebook.com/smartearn" passHref><FacebookIcon fontSize="small"/></Link></li>
                    <li><Link href="https://twitter.com/smartearn" passHref><TwitterIcon fontSize="small"/></Link></li>
                    <li><Link href="https://instagram.com/smartearn" passHref><InstagramIcon fontSize="small"/></Link></li>
                </ul>

                <span>
                <Link href="mailto:admin@smartearn.com" passHref><p><EmailIcon fontSize="small"/></p></Link>
                    <p>admin@smartearn.com</p>
                
                </span>
                </div>
        </TopNav>

        <BottomNav bg={BRAND_COLOR_A}>
            <div  className='bottom-nav-container'>
                
                    <span className="logo">
                        <Link href='/' passHref><Image width='100' height='100' src={logo} alt="" /></Link>
                    </span> 
                    <div className="user">
                        {
                            loggedIn ? 
                            (
                                <Link href='/dashboard' passHref>
                                    <Dashboard>Dashboard</Dashboard>
                                </Link>
                            ):
                            (
                                <ul className="bottom-nav-tabs">
                                    <li><Link href='/'>Home</Link></li>
                                    <li><Link href='/user-manual'>How it works</Link></li>
                                    <li><Link href='/contact'>Plans</Link></li>
                                    <li><Link href='/tc'><button className='signin'>Sign in</button></Link>&nbsp;&nbsp;<Link href='/policy'><button className='signup'>Sign up</button></Link></li>
                                    <li></li>
                                </ul>
                                // <>
                                //     <Link href='/signup' passHref>
                                //         <UserAction>Sign Up</UserAction>
                                //     </Link>
                                //     <Link href='/signin' passHref>
                                //         <UserAction>Sign In</UserAction>
                                //     </Link>
                                // </>
                            )
                        }
                    </div>
            </div>
        </BottomNav>
    </Nav>
  )
}

