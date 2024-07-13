import React from 'react';
import './header.css';
import CTA from './CTA';
//@ts-ignore
import MyPic from '../../assets/hero_image.png';
import HeaderSocials from './HeaderSocials';
import Typewriter from 'typewriter-effect';

const Header: React.FC = () => {

  const roles = ["Full-Stack Developer", "Frontend Developer", "Backend Developer", "Software Engineer", "Web Application Developer"];

  return (
    <header id='home'>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Sayed Mubashir Ali</h1>
        <h5 className="text-light">
        <Typewriter
          options={{
            strings: roles,
            autoStart: true,
            loop: true,
          }}
        />
        </h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={MyPic} alt='me' />
        </div>

        <a href="#contacts" className='scroll__down'>Scroll to Bottom</a>
      </div>
    </header>
  );
}

export default Header;