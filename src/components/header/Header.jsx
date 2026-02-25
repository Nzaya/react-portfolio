import React from 'react';
import './header.css';
import CTA from './CTA';
import ME_WEBP from '../../assets/me.webp';
import ME_PNG from '../../assets/me.png';
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
          <picture>
            {/* WebP for modern browsers */}
            <source 
              srcSet={ME_WEBP}
              type="image/webp"
            />
            {/* Fallback PNG */}
            <img 
              src={ME_PNG} 
              srcSet={`${ME_PNG} 600w, ${ME_PNG} 1200w`}
              sizes="(max-width: 600px) 600px, 1200px"
              alt="Sharon Nzaya"  
              loading="lazy" 
              decoding="async"
              fetchpriority="high" 
            />
          </picture>
        </div>

        <a href="#contact" className='scroll__down'>
          Scroll Down
        </a>

      </div>
    </header>
  );
};

export default Header;