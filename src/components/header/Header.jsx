import React from 'react'
import './header.css'
import CTA from './CTA' //import our cv
import ME from '../../assets/me-about3.png'  // import our image
import HeaderSocial from './HeaderSocials'



const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Sharon Nzaya </h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA/>  {/* make cv appear */}
        <HeaderSocial/>
        
        <div className="me">  
          <img src={ME} alt="me" />  {/* display picture */}
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>


      </div>
    </header>
  )
}

export default Header