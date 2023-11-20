import { useState, useRef, useEffect } from 'react'
import myPhoto from '../Assets/myPhoto.png'
import kret from '../Assets/kret.png'

import './index.css'

const Accordion = ({ title, text, headerImg }) => {
  return (
    <div className="accordion-header">
      <div className="accordion-text">
        <h3>{title}</h3>
        <span className="accordion-tech-word">JavaScript</span>
        <span className="accordion-tech-word">HTML5</span>
        <span className="accordion-tech-word">CSS3</span>
        <span className="accordion-tech-word">React</span>
      </div>
      <div className="accordion-image">
        <img src={kret} alt="Header" />
      </div>
    </div>
  )
}

export default Accordion
