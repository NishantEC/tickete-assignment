import "./Footer.scss"

import logo from "../../assets/icons/Logo.svg"
import instagramLogo from "../../assets/icons/InstagramLogo.svg"
import facebookLogo from "../../assets/icons/FacebookLogo.svg"
import twitterLogo from "../../assets/icons/TwitterLogo.svg"

const Footer = () => {
  return (
    <footer>
        <img src={logo} alt="logo"/>
<div className="links">
<div className="scial-wrapper">
          <a href="/" >
            <img src={instagramLogo} alt="" />
          </a>
          <a href="/" >
            <img src={facebookLogo} alt="" />
          </a>
          <a href="/" >
            <img src={twitterLogo} alt="" />
          </a>
        </div>

        <div className="disclaimer">
        <a href="/">© Tickete Inc.</a> • <a href="">Privacy</a> • <a href="">Terms</a> • <a href="">Cancellation</a>
        </div>
</div>

    </footer>
  )
}

export default Footer