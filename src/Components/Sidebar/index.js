import './index.css'
import { NavLink } from 'react-router-dom'
import { ReactComponent as CV } from '../Assets/CV.svg'
import { ReactComponent as Linkedin } from '../Assets/LinkedIN.svg'
import { ReactComponent as Home } from '../Assets/Home.svg'
import { ReactComponent as Github } from '../Assets/Github.svg'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <nav>
        <NavLink exact to="/" className="nav-home nav-link">
          <Home className="nav-icon" alt="home icon" />
          <span>HOME</span>
        </NavLink>
        <NavLink exact to="/Resume" className="nav-cv nav-link">
          <CV className="nav-icon" alt="CV icon" />
          <span>RESUME</span>
        </NavLink>
        {/* <NavLink exact to="/Contact" className="nav-contact nav-link">
          <Contact className="nav-icon" alt="Contact icon" />
          <span>CONTACT</span>
        </NavLink> */}

        <NavLink exact to="/Github" className="nav-github nav-link">
          <Github className="nav-icon" alt="Github icon" />
          <span>GITHUB</span>
          <span className="nav-api-text">(API)</span>
        </NavLink>
        <NavLink exact to="/Linkedin" className="nav-linkedin nav-link">
          <Linkedin className="nav-icon" alt="Linkedin icon" />
          <span>LINKEDIN</span>
        </NavLink>
      </nav>
    </div>
  )
}

export default Sidebar
