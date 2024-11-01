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
            I'm a <b>Full Stack Developer</b> with over 3 years of experience.
            As an enthusiastic Software Engineer, I seek a challenging full-time
            opportunity to apply and expand my technical skills. With a strong
            academic background and hands-on experience in various programming
            languages, I am eager to contribute to innovative projects and learn
            from seasoned professionals. I am a quick learner with strong
            problem-solving skills, ready to face any challenge.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
