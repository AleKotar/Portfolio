import { useState } from 'react'
import myPhoto from '../Assets/myPhoto.png'
import './index.css'

const Accordion = ({ title, text }) => {
  // Wrap title and text in curly braces
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={handleToggle}>
        <span className={`arrow ${isOpen ? 'open' : ''}`}></span>
        <h3>{title}</h3>
      </div>
      {isOpen && (
        <div className="accordion-content">
          <span>{text}</span>
          <img src={myPhoto} alt="Description" />
        </div>
      )}
    </div>
  )
}

export default Accordion
