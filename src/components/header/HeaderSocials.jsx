import React from 'react'
import {BsLinkedin} from 'react-icons/bs' 
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/sharon-nzaya-aa741518a/" target="_blank"><BsLinkedin /></a> {/* __blank takes it to a new page when clicked */}
        <a href="https://github.com/Nzaya" target="_blank"><FaGithub /></a>
        {/* <a href="https://dribble.com" target="_blank"><FiDribbble /></a> */}

    </div>
  )
}

export default HeaderSocials