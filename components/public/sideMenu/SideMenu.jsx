import SideMenuModal from "../../modals/sideMenuModal/SideMenuModal";
import Image from "next/image";
import Link from 'next/link'
import { useRouter } from "next/router";
import NavAuthBtn from "../header/NavAuthBtn";
import { CopyRight } from "../../../styles/globalStyle";
const logo = '/onboadinglogo.png';
import {
    SideMenuRow1,
    SideMenuRow2,
    SideMenuRow3,
    
} from './styles'




export default function SideMenu({navLinks, showMenu, setShowMenu}) {
    const router = useRouter()
    const closeMenu =()=>setShowMenu(false)
    
  return (
    <>
        <SideMenuModal showMenu={showMenu} setShowMenu={setShowMenu}>
            <div className="content">
                <SideMenuRow1>
                    <div className="logo">
                        <Link href='/' passHref>
                            <a><Image width='100' height='100' src={logo} alt="" /></a>
                        </Link>
                    </div>
                </SideMenuRow1>

                <SideMenuRow2>
                    <div className="navLink">
                    {
                        navLinks.map((link, i)=>{
                            return (
                                <div key={i}>
                                    <Link href={link.url} passHref>
                                        <a onClick={closeMenu}>
                                            <div className={link.url === router.asPath ? 'side-menu-active-icon icon' : 'icon'}>
                                                {link.icon}
                                            </div>
                                            <div className={link.url === router.asPath ? 'side-menu-active-link link' : 'link'}>
                                                {link.link}
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            )
                        })
                    }
                    </div>
                </SideMenuRow2>

                <SideMenuRow3>
                    <div style={{color: '#fff', background: 'gild'}} className="nav">
                        <NavAuthBtn setShowMenu={setShowMenu} location={'mobileView'}/>
                    </div>
                    <CopyRight className="copyright">
                        &copy; {new Date().getFullYear() > 2022 ? '2021 - ' + new Date().getFullYear() : 2022} Smart Earners
                    </CopyRight>
                </SideMenuRow3>
            </div>
        </SideMenuModal>
    </>
  )
}
