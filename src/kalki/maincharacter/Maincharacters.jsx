import React from 'react'
import './Maincharacters.css'
import bhairava from "../../kalki/images/bhairava.jpeg"
import aswaddama from "../../kalki/images/aswaddama.jpg"
import amma from "../../kalki/images/amma.jpg"
import logo from "../../kalki/images/logo.jpeg"
import logo1 from "../../kalki/images/logo1.jpg"
import logo2 from "../../kalki/images/logo2.png"


const Maincharacters = () => {
  return (
    <div className="maincharacter">
        <div className="imag">
            <img src={bhairava} alt="" />
            <div className="cap">
                <img src={logo} alt="" />
                <p>Bhairava</p>
            </div>
        </div>
        <div className="imag">
            <img src={aswaddama} alt="" />
            <div className="cap">
                <img src={logo1} alt="" />
                <p>Aswaddama</p>
            </div>
        </div>
        <div className="imag">
            <img src={amma} alt="" />
            <div className="cap">
                <img src={logo2} alt="" />
                <p>Amma vachindi</p>
            </div>
        </div>
    </div>
  )
}

export default Maincharacters