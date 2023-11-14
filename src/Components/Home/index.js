import React from 'react'
import myPhoto from '../Assets/DSC_5587.jpg'

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
            JavaScript HTML5 CSS3 React Redux Node.js TypeScript Firebase REST
            API JSON Wordpress UI/UX Adobe 3D
          </h3>
        </div>
        <div className="personal-photo">
          <myPhoto />
        </div>
      </div>
    </div>
  )
}

export default Home
