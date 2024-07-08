import React from 'react'
import { IoLogoInstagram } from "react-icons/io";
import { LuFacebook } from "react-icons/lu";
import "../css/Footer.css"


const Footer = () => {
  return (
    <div className='footer-body'>
        <div className="footer-content">
        <div className="ft-left">
            <h4>
                HAPPY COFFEE SHOP
            </h4>
            <p>
                All right reserved
            </p>
        </div>
        <div className="ft-right">
            <div className="ft-logo">
            <LuFacebook />
            <IoLogoInstagram />
            </div>
            <div className="ft-enquiry">
                <h4>
                   FOR ENQUIRIES
                </h4>
                <p>
                    +234 567 8905
                </p>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Footer