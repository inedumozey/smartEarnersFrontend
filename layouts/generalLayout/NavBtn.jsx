import React from 'react'
import { NavBtn } from './headerStyles'
import Link from 'next/link'
import {useDispatch} from 'react-redux'
import check from '../../utils/index'
import { logout } from '../../components/auth/redux/auth';
import {useRouter} from 'next/router'


export default function NavBtn_({stick, location}) {
    const dispatch = useDispatch();
    const router = useRouter()


  return (
    <NavBtn location={location} stick={stick}>
    {
        check.isLoggedIn() ? 
        (
            <>
                <Link href='/dashboard' passHref>
                    <a className='nav-btn dashboard' style={{border: router.asPath.includes('/dashboard') ? '1px solid red' : 'none'}}>Dashboard</a>
                </Link>
                <Link href='/signin' passHref>
                    <a onClick={dispatch(logout())} className='nav-btn logout' >Logout</a>
                </Link>
            </>
        ):
        (
            <>
                <Link href='/signup' passHref>
                    <a style={{color: router.asPath === '/signup' ? '#fff' : '#F1AD00'}} className='nav-btn signup'>Sign Up</a>
                </Link>
                <Link href='/signin' passHref>
                    <a style={{color: router.asPath === '/signin' ? '#fff' : '#F1AD00'}}  className='nav-btn signin'>Sign in</a>
                </Link>
            </>
        )
    }
    </NavBtn>
  )
}
