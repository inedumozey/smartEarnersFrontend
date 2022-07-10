import Image from 'next/image'
import Link from 'next/link'
import { Footer } from './styles';
import DraftsIcon from '@mui/icons-material/Drafts';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
const FooterColor = '#eef8ff'


export default function Footer_() {
  return (
    <Footer bg={FooterColor}>
      <div className="row">
       
        <div className="col">
        <Image src={"/logo.PNG"} width="100" height="100" alt="Footer Logo" className="logo" />
          <p>SmartEarner is a trustworthy platform that has been in existence for years serving several financial institutions across the world.</p>
        </div>
        <div className="col">
          <h3>Address</h3>
          <p>APDC Estate Kubwa Express Road</p>
          <p>Kaba District, Zip Code 72762</p>
          <p>Abuja, Nigeria</p>
          <p className="email-id">marcusdashe@gmail.com</p>
          <h4>+234 803 4477 604</h4>
        </div>
        <div className="col">
          <h3>
            <ul>
              <li><Link href="/" passHref>Home</Link></li>
              <li><Link href="/" passHref>Plans</Link></li>
              <li><Link href="/" passHref>How it works</Link></li>
              <li><Link href="/" passHref>Terms of Usage</Link></li>
              <li><Link href="/" passHref>Policy</Link></li>
            </ul>
          </h3>
        </div>
        <div className="col">
          <h3>Newsletter</h3>
          <form>
            <label>
              <DraftsIcon  fontSize="small"/>
               <input type="email" placeholder="Enter your email" required />
            </label>
            <button type="submit">< ArrowForwardIcon  fontSize="small" /></button>
          </form>

          <div className="social-icons">
                <FacebookIcon fontSize="small" />
                <TwitterIcon  fontSize="small"/>
                <InstagramIcon  fontSize="small"/>
          </div>
        </div>
      </div>

    </Footer>
  )
}
