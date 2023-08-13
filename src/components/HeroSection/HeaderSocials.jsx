import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/badr-annabi-a316a3192/' rel="noreferrer" target='_blank'><BsLinkedin /></a>
        <a href='https://github.com/Badr-Annabi' rel="noreferrer" target='_blank'><FaGithub /></a>
        <a href='https://www.instagram.com/badr_annabi/' rel="noreferrer" target='_blank'> <BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials