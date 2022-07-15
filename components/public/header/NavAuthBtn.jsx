import React from 'react'
import { NavBtn } from './styles'
import Link from 'next/link'
import {useDispatch} from 'react-redux'
import check from '../../../utils/index'
import { logout } from '../../../redux/auth/auth';
import {useRouter} from 'next/router'


export default function NavAuthBtn({setShowMenu, stick, location}) {
    const dispatch = useDispatch();
    const router = useRouter()

    const closeSideMenu =()=>{
        setShowMenu(false)
    }

    const handleLogout =()=>{
        closeSideMenu()
        dispatch(logout())
    }

    return (
        <NavBtn location={location} stick={stick}>
        {
            check.isLoggedIn() ? 
            (
                <>
                    <Link href='/dashboard' passHref>
                        <a onClick={closeSideMenu} className='nav-btn dashboard' style={{color: router.asPath === '/dashboard' ? '#F1AD00' : '#fff'}} >Dashboard</a>
                    </Link>
                    <Link href='/signin' passHref>
                        <a onClick={handleLogout} className='nav-btn logout' >Logout</a>
                    </Link>
                </>
            ):
            (
                <>
                    <Link href='/signup' passHref>
                        <a onClick={closeSideMenu} style={{color: router.asPath === '/signup' ? '#F1AD00' : '#fff'}} className='nav-btn signup'>Sign Up</a>
                    </Link>
                    <Link href='/signin' passHref>
                        <a onClick={closeSideMenu} style={{color: router.asPath === '/signin' ? '#F1AD00' : '#fff'}}  className='nav-btn signin'>Sign in</a>
                    </Link>
                </>
            )
        }
        </NavBtn>
  )
}
