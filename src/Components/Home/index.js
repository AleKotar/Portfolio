import React from 'react'
import myPhoto from '../Assets/myPhoto.png'
import './index.css'
import Accordion from '../Accordion'

const Home = () => {
  return (
    <div className="home-page">
      <div className="container">
        <div className="text">
          <h2>
            Design. Code.
            <br />
            Create.
          </h2>
          <div className="tech-stack">
            <h3>
              <span className="tech-word">JavaScript</span>
              <span className="tech-word">HTML5</span>
              <span className="tech-word">CSS3</span>
              <span className="tech-word">React</span>
              <span className="tech-word">Redux</span>
              <span className="tech-word">Node.js</span>
              <span className="tech-word">TypeScript</span>
              <span className="tech-word">Firebase</span>
              <span className="tech-word">REST</span>
              <span className="tech-word">API</span>
              <span className="tech-word">JSON</span>
              <span className="tech-word">Wordpress</span>
              <span className="tech-word">UI/UX</span>
              <span className="tech-word">Adobe</span>
              <span className="tech-word">3D</span>
            </h3>
          </div>
          <button className="contact-button">CONTACT ME</button>
        </div>
        <div className="personal-photo">
          <img src={myPhoto} alt="Aleksanders face" className="img-photo" />
        </div>
      </div>
      <div className="bottom-text">
        <span>Recent work:</span>
        <span className="bottom-text-small">
          (links to github and created websites)
        </span>
      </div>
      <div className="accordion">
        <Accordion text="blabla" title="tytul" />
        <Accordion text="xd" title="sdada" />
        <Accordion text="blabla" title="tytul" />
        <Accordion text="xd" title="sdada" />
      </div>
      <div className="bottom-text">
        <span>Contact:</span>
        <span className="bottom-text-small">
          Please ontact me directly through my email:{' '}
          <strong>
            {' '}
            <a href="mailto:olek.kotarski@gmail.com">olek.kotarski@gmail.com</a>
          </strong>{' '}
          or through contact form below:
        </span>
        <span>Coming soon, I need one free evening :)</span>
      </div>
    </div>
  )
}

export default Home
