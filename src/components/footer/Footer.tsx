import React from "react";
import "./footer.css";
import { BsLinkedin, BsGithub, BsHeartFill } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

const Footer: React.FC = () => {
  const currYear = new Date().getFullYear();

  return (
    <footer>
      <a href="#home" className="footer__logo">
        Home
      </a>
      <ul className="permalinks">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#myprojects">My Projects</a>
        </li>
        <li>
          <a href="#contacts">Contact Me</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/sayed-mubashir-ali-0709aa193/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/hulkmania40/">
          <BsGithub />
        </a>
        <a href="https://leetcode.com/u/hulkmania40/">
          <SiLeetcode />
        </a>
      </div>

      <div className="footer__copyright">
        <div className="footer__copyright__love">
          Made with <BsHeartFill color="red" /> by Mubashir
        </div>
        <small>&copy; {currYear} All Rights Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
