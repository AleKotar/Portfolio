import './index.css'
import React, { useState } from 'react'

const Accordion = ({ title, img, techWords, externalLink, description }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded)
  }

  let classNames = 'accordion-header'
  if (isExpanded) {
    classNames += '-expanded'
  }

  return (
    <div className={classNames} onClick={toggleExpansion}>
      <div className="accordion-text">
        <h3>{title}</h3>
      </div>
      <div className="accordion-tech-words">
        {techWords.map((techWord, index) => (
          <span key={index} className="accordion-tech-word">
            {techWord}
          </span>
        ))}
        {!isExpanded && <span className="read-more-button">Read More</span>}
      </div>
      <div className="accordion-image">
        <img src={img} alt="project visualization" />
      </div>
      {isExpanded && (
        <>
          <div className="accordion-expanded-content">
            <span className="description">{description}</span>
            <br></br>
            <br></br>
            <a href={externalLink} target="_blank" rel="noopener noreferrer">
              {externalLink}
            </a>
          </div>
          <button className="close-button" onClick={toggleExpansion}>
            Close
          </button>
        </>
      )}
    </div>
  )
}

export default Accordion
