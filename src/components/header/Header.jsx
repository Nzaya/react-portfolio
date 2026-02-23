import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocial from './HeaderSocials';

const Header = ({ setPrefillMessage }) => {   //Receive prop
  return (
    <header>
      <div className="container header__container">

        <h5>Hello I'm</h5>
        <h1>Sharon Nzaya</h1>
        <h5 className="text-light">FullStack Developer</h5>

        {/* Pass it to CTA */}
        <CTA setPrefillMessage={setPrefillMessage} />

        <HeaderSocial/>

        <div className="me">  
          <img src={ME} alt="me"  loading="eager"/>
        </div>

        <a href="#contact" className='scroll__down'>
          Scroll Down
        </a>

      </div>
    </header>
  );
};

export default Header;