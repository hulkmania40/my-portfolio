import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

const HeaderSocials: React.FC = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/sayed-mubashir-ali-0709aa193/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/hulkmania40/"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
      <a
        href="https://leetcode.com/u/hulkmania40/"
        target="_blank"
        rel="noreferrer"
      >
        <SiLeetcode />
      </a>
    </div>
  );
};

export default HeaderSocials;
