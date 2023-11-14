import React from 'react'
import myPhoto from '../Assets/myPhoto.png'
import './index.css'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text">
        <h2>
          Design. Code.
          <br />
          Combine.
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
      </div>
      <div className="personal-photo">
        <img src={myPhoto} alt="My Photo" className="img-photo" />
      </div>
    </div>
  )
}

export default Home
