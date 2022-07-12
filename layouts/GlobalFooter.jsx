import Image from 'next/image'
import Link from 'next/link'
import { useDispatch } from 'react-redux';
import { logout } from '../components/auth/redux/auth';
import { useRouter } from 'next/router';
import check from '../utils'
import { GlobalFooter, CopyRight } from '../styles/globalStyle';

export default function GlobalFooter_() {
    const dispatch = useDispatch();
    const router = useRouter()

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

    return (
      <GlobalFooter>

        <div className="top">
          <div className="col">
            <h3>Smart Earners</h3>
            <p>
              SmartEarner is a trustworthy platform that has been in existence for years serving several financial institutions across the world.
            </p>
            <div className="imgDiv">
              <Image src={"/logo.PNG"} width="100" height="100" alt="Footer Logo" className="logo" />
            </div>
          </div>
          
          <div className="col">
              <h3>Address</h3>
              <p>APDC Estate Kubwa Express Road</p>
              <p>Kaba District, Zip Code 72762</p>
              <p>Abuja, Nigeria</p>
          </div>
  
          <div className="col">
              <h3>Mobile</h3>
              <h4>+234 803 4477 604</h4>
          </div>
  
          <div className="col">
              <h3>Email</h3>
              <p className="email-id">marcusdashe@gmail.com</p>
          </div>
          
          <div className="col">
            <ul>
              {
                navLinks.map((link, i)=>{
                  return (
                    <Link href={link.url} passHref>
                        <a style={{display: 'inline-block'}}>
                            <div style={{display: 'inline-block'}} className={link.url === router.asPath ? 'active link' : 'link'}>{link.link}
                            </div>
                        </a>
                    </Link>
                  )
                })
              }
    
              {
                check.isLoggedIn() ? 
                (
                  <>
                    <Link href="/dashboard" passHref><a>Dashboard</a></Link>
                    <Link href="/signin" passHref><a onClick={()=>dispatch(logout())}>Logout</a></Link>
                  </>
                ): 
                (
                  <>
                    <Link href="/signup" passHref><a>Sign Up</a></Link>
                    <Link href="/signin" passHref><a>Sigin In</a></Link>
                  </>
                )
              }
            </ul>
          </div>
        </div>
  
        <div className="bottom">
          <CopyRight className="copyright">
              &copy; {new Date().getFullYear() > 2022 ? '2021 - ' + new Date().getFullYear() : 2022} Smart Earners
          </CopyRight>
        </div>

      </GlobalFooter>
  
    )
}
