import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer__logo'>ANNABI BADR</a>
      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#service">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100004310952121"><FaFacebookF /></a>
        <a href="https://https://www.instagram.com/badr_annabi/.com"><FiInstagram /></a>
        <a href="https://twitter.com/annabi_badr"><FaTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Badr's Portfolio, All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer