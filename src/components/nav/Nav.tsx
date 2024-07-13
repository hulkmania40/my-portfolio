import React, { useState, useEffect } from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { BiUser, BiMessageSquareDetail } from 'react-icons/bi';
import { FaLaptopCode } from 'react-icons/fa';
import { GoChecklist } from 'react-icons/go';

const Nav: React.FC = () => {
  const [activeNav, setActiveNav] = useState<string>('#');

  useEffect(() => {
    // Set active nav based on the URL parameter
    const hash = window.location.hash;
    if (hash) {
      setActiveNav(hash);
    }
  }, []);

  const handleClick = (hash: string) => {
    setActiveNav(hash);
    window.history.pushState(null, '', hash); // Update URL without reloading the page
  };

  return (
    <nav>
      <a
        href="#home"
        onClick={() => handleClick('#home')}
        className={activeNav === '#home' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => handleClick('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <BiUser />
      </a>
      <a
        href="#experience"
        onClick={() => handleClick('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <FaLaptopCode />
      </a>
      <a
        href="#myprojects"
        onClick={() => handleClick('#myprojects')}
        className={activeNav === '#myprojects' ? 'active' : ''}
      >
        <GoChecklist />
      </a>
      <a
        href="#contacts"
        onClick={() => handleClick('#contacts')}
        className={activeNav === '#contacts' ? 'active' : ''}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
