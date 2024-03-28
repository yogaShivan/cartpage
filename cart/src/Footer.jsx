import React from 'react'
import './Footer.css';
import logo_shop666 from './assets/logo_shop666.png'
import instagram_icon from './assets/instagram_icon.png'
import pintester_icon from './assets/pintester_icon.png'
import whatsapp_icon from './assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerLogo">
            <img src={logo_shop666} alt="" />
            <p>buYer</p>
</div>
        <ul className='footerLinks'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="socialIcon">

                <div className="footerIconContainer">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footerIconContainer">
                    <img src={pintester_icon} alt="" />
                </div>
                <div className="footerIconContainer">
                    <img src={whatsapp_icon} alt="" />
                </div>

        </div>
        <div className="footerCopyRight">
            <hr />
            <p>Copyright @ 2023 - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer