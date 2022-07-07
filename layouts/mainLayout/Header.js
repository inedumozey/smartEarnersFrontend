import Image from 'next/image'
import Link from 'next/link';
import {useState} from 'react'

const BRAND_COLOR_B = 'rgb(241, 173, 0)';
const BRAND_COLOR_A = 'rgb(0, 65, 93)'
const logo = '/logo.png';

import {
    Nav,
    Logo,
    User,
    UserAction,
    Dashboard
} from './styles'

export default function Header() {
    const [loggedIn, setLoggedIn] = useState(false)

  return (
    <Nav bg={BRAND_COLOR_A}>
        <Link href='/' passHref>
            <Logo>
                <Image width='100' height='100' src={logo} alt="" />
            </Logo>
        </Link>

        <User bg={BRAND_COLOR_B}>
            {
                loggedIn ? 
                (
                    <Link href='/dashboard' passHref>
                        <Dashboard>Dashboard</Dashboard>
                    </Link>
                ):
                (
                    <>
                        <Link href='/signup' passHref>
                            <UserAction>Sign Up</UserAction>
                        </Link>
                        <Link href='/signin' passHref>
                            <UserAction>Sign In</UserAction>
                        </Link>
                    </>
                )
            }
        </User>
        
    </Nav>
  )
}
