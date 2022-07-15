import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { GlobalFooter } from './styles';
import NavAuthBtn from '../public/header/NavAuthBtn';
import { CopyRight } from '../../styles/globalStyle';
import { mobileAndTabletCheck } from '../../utils/mobileAndTabletCheck';
import { useEffect, useState } from 'react';


export default function GlobalFooter_() {
    const router = useRouter();
    const [isMobile, setIsMobile] = useState(false)

    useEffect(()=>{
        setIsMobile(mobileAndTabletCheck(window))
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
        <GlobalFooter isMobile={isMobile}>

          <div className="top">
            <div className="col">
              <h3>SmartEarners' Investment</h3>
              <p>
                SmartEarner is a trustworthy platform that has been in existence for years serving several financial institutions across the world.
              </p>
              <div className="imgDiv">
                <Image src={"/logo.PNG"} width="100" height="100" alt="Footer Logo" className="logo" />
              </div>
            </div>
    
            <div className="col">
                <h3>Email</h3>
                <p className="email-id">support@teamsmartearners.com</p>
            </div>
            
            <div className="col">
              <ul>
                {
                  navLinks.map((link, i)=>{
                    return (
                      <Link key={i} href={link.url} passHref>
                          <a style={{display: 'inline-block'}}>
                              <div style={{display: 'inline-block'}} className={link.url === router.asPath ? 'active link' : 'link'}>{link.link}
                              </div>
                          </a>
                      </Link>
                    )
                  })
                }
              </ul>
            </div>

            <div className="col">
              <NavAuthBtn location={'mobileView'} />
            </div>
            
          </div>
    
          <div className="bottom">
            <CopyRight className="copyright">
                &copy; {new Date().getFullYear() > 2022 ? '2021 - ' + new Date().getFullYear() : 2022}, SmartEarners
            </CopyRight>
          </div>

        </GlobalFooter>
    
    )
}
