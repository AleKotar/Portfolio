// Accordion.js
import './index.css'

const Accordion = ({ title, img, techWords }) => {
  return (
    <div className="accordion-header">
      <div className="accordion-text">
        <h3>{title}</h3>
        {techWords.map((techWord, index) => (
          <span key={index} className="accordion-tech-word">
            {techWord}
          </span>
        ))}
      </div>
      <div className="accordion-image">
        <img src={img} alt="project visualization" />
      </div>
    </div>
  )
}

export default Accordion
