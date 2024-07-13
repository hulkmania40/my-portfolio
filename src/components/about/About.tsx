import React from "react";
import "./about.css";
//@ts-ignore
import myImage from "../../assets/dev_image.png";
import { GiGraduateCap } from "react-icons/gi";
import { BsBookmarkStar } from "react-icons/bs";

import { TfiWorld } from "react-icons/tfi";

const About: React.FC = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={myImage} alt="Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiGraduateCap className="about__icon" />
              <h5>Degree</h5>
              <small>
                B.Tech - CSE <br />
                <i>Silicon Institute of Technology, Bhubaneshwar</i>
              </small>
            </article>

            <article className="about__card">
              <BsBookmarkStar className="about__icon" />
              <h5>CGPA</h5>
              <small>8.5</small>
            </article>

            <article className="about__card">
              <TfiWorld className="about__icon" />
              <h5>Domains</h5>
              <small>
                <ul>
                  <li>Web Development</li>
                  <li>Full Stack Development</li>
                </ul>
              </small>
            </article>
          </div>
          <p>
            I'm a <b>Full Stack Developer</b>. I'm an enthusiastic and driven
            Software Engineering student seeking a challenging full-time
            opportunity to apply and expand my technical skills. With a strong
            academic foundation in software engineering and hands-on experience
            in various programming languages, I am eager to contribute to
            innovative projects and learn from experienced professionals in the
            industry. I am a quick learner who is always ready to face
            challenges. Additionally, I possess strong problem-solving skills
            essential for resolving complex technical issues.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
