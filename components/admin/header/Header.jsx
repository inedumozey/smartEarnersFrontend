import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from 'next/image'
import Link from 'next/link';
import { MdClose, MdMenu} from 'react-icons/md';
import { ToggleMenu } from '../../../styles/globalStyle'
import HomeIcon from '@mui/icons-material/Home';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import BalanceIcon from '@mui/icons-material/Balance';
import HelpIcon from '@mui/icons-material/Help';

const logo = '/onboadinglogo.png';
const defaultSidebarWidth = '30px';

import {
  Header,
} from "./styles"


export default function Header_() {
  const router = useRouter();

  return (
    <Header>
        
        {/* top nave bar */}
        <div className="top-nav-bar">
            {/* logo */}
            <div className="col1 logo">
                <Link href='/' passHref>
                    <a><Image width='100' height='100' src={logo} alt="" /></a>
                </Link>
            </div>

            {/* nav links */}
            <div className="col2">
              Others
            </div>

            {/* current page name */}
            <div className='col3'>
              <small></small>
              Admin
            </div>
        </div>
    </Header>
  )
}
