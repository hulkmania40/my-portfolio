import React from 'react';
import './myprojects.css';

//@ts-ignore
import IMG1 from '../../assets/img1.png';
//@ts-ignore
import IMG2 from '../../assets/img2.png';
//@ts-ignore
import IMG3 from '../../assets/img3.png';

const Myprojects: React.FC = () => {
  return (
    <section id='myprojects'>
      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="My Portfolio" />
          </div>
          <h3>My Portfolio (This website)</h3>
          <small className='text-light'>ReactTS | SCSS</small>
          <div className="portfolio__item-cta">
            <a href="#" target="_blank" rel='noreferrer' className='btn'>Github</a>
            <a href="#" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Quiz App" />
          </div>
          <h3>Quiz App</h3>
          <small className='text-light'>ReactJS | MaterialUI</small>
          <div className="portfolio__item-cta">
            <a href="https://github.com/hulkmania40/quizapp" target="_blank" rel='noreferrer' className='btn'>Github</a>
            <a href="https://quizapp-fd10c.web.app/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="Meme Generator" />
          </div>
          <h3>Meme Generator</h3>
          <small className='text-light'>ReactJS</small>
          <div className="portfolio__item-cta">
            <a href="https://github.com/hulkmania40/memegenerator" target="_blank" rel='noreferrer' className='btn'>Github</a>
            <a href="https://memegenerator-cf71d.firebaseapp.com/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>
          </div>
        </article>

      </div>
    </section>
  );
}

export default Myprojects;
