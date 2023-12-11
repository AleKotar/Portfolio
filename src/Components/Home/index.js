import React from 'react'
import myPhoto from '../Assets/myPhoto.png'
import './index.css'
import Accordion from '../Accordion'
import projectData from '../library/projectData'
import Contact from '../Contact/index.js'

const Home = () => {
  return (
    <div className="home-page">
      <div className="grid-container">
        <div className="grid-title">
          <span>
            Design. Code.
            <br />
            Develop.
          </span>
        </div>
        <div className="grid-tech-stack">
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
          <button className="contact-button">CONTACT ME</button>
          <button className="github-button">My Github</button>
        </div>

        <div className="grid-personal-photo">
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
        {projectData.map((project) => (
          <Accordion
            key={project.id}
            title={project.title}
            img={project.img}
            techWords={project.techWords}
          />
        ))}
      </div>
      <div className="contact">
        <div className="bottom-text">
          <span>Contact:</span>
        </div>
        <div>
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default Home
