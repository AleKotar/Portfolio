import './index.css'
import PDF from '../Assets/Aleksander_Kotarski_CV_ENG.pdf'

function Resume() {
  return (
    <div>
      <iframe title="resume" className="resume" src={PDF}></iframe>
    </div>
  )
}

export default Resume
