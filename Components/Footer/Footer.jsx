import React from 'react'
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <div className='footer'>
<div className='section1'>
  <p className='email'>Email: ejfjfn@gmail.com</p>
  </div>
  <div className='social'>
  <FaFacebookF />
  <FaTwitter />
  <FaDiscord />
  <FaInstagram />
  </div>
    <p className='number'>Contact: 08000034472</p>
    </div>
  )
}

export default Footer