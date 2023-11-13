import React from 'react'
import myPhoto from '../Assets/DSC_5587.jpg'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text">
        <h1>Aleksander Kotarski</h1>
        <h2>
          Design. Code.
          <br />
          Harmony.
        </h2>
        <div className="personal-photo">
          <myPhoto />
        </div>
      </div>
    </div>
  )
}

export default Home
