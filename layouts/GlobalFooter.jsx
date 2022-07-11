import Image from 'next/image'
import Link from 'next/link'
import { useDispatch } from 'react-redux';
import { logout } from '../components/auth/redux/auth';
import check from '../utils'
import { GlobalFooter, CopyRight } from '../styles/globalStyle';
import DraftsIcon from '@mui/icons-material/Drafts';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function GlobalFooter_() {
    const dispatch = useDispatch()

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
                <Link href="/" passHref><a>Home</a></Link>
                <Link href="/about-us" passHref><a>About Us</a></Link>
                <Link href="/contact-us" passHref><a>Contact Us</a></Link>
                <Link href="/user-manual" passHref><a>How it works</a></Link>
                <Link href="/tc" passHref><a>Terms and Conditions</a></Link>
                <Link href="/privacy" passHref>Policy Privacy</Link>
                <Link href="/faq" passHref><a>FAQ</a></Link>
                <Link href="/" passHref><a>Plans</a></Link>
              {
                
                check.isLoggedIn() ? 
                (
                  <>
                    <li><Link href="/dashboard" passHref><a>Dashboard</a></Link></li>
                    <li><Link href="/signin" passHref><a onClick={()=>dispatch(logout())}>Logout</a></Link></li>
                  </>
                ): 
                (
                  <>
                    <li><Link href="/signup" passHref><a>Sign Up</a></Link></li>
                    <li><Link href="/signin" passHref><a>Sigin In</a></Link></li>
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
