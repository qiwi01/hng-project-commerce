import React from 'react'
import "../css/Header.css"
import coffeeimg from "../images/coffe 1.png"
const Header = () => {
  return (
    <div className='header-body'>
            <img src={coffeeimg} alt="" />
        <div className="hd-main">
            <h1>Best Coffee</h1>
        </div>
        <div className="hd-content">
            <p>Our coffee is a bleed of style, functionality and durabilty designed to complment any supplement. The cofee keeps you refresheed and gives your tea a great taste</p>
            <div className="hd-button">
            <div className="hd-button1">
            <h6>see all products</h6>
            </div>
            <div className="hd-button2">
                <h6>buy now</h6>
            </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default Header