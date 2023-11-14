import './index.css'
import { NavLink } from 'react-router-dom'
import { ReactComponent as CV } from '../Assets/CV.svg'
import { ReactComponent as Contact } from '../Assets/Contact.svg'
import { ReactComponent as Linkedin } from '../Assets/LinkedIN.svg'
import { ReactComponent as Home } from '../Assets/Home.svg'
import { ReactComponent as Github } from '../Assets/github-mark-white.svg'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <nav>
        <NavLink exact to="/" className="nav-home nav-link">
          <Home alt="home icon" />
          <span>HOME</span>
        </NavLink>
        <NavLink exact to="/Resume" className="nav-cv nav-link">
          <CV alt="CV icon" />
          <span>RESUME</span>
        </NavLink>
        <NavLink exact to="/Contact" className="nav-contact nav-link">
          <Contact alt="Contact icon" />
          <span>CONTACT</span>
        </NavLink>
        <NavLink exact to="/Linkedin" className="nav-linkedin nav-link">
          <Linkedin alt="Linkedin icon" />
          <span>LINKEDIN</span>
        </NavLink>
        <NavLink exact to="/Github" className="nav-github nav-link">
          <Github alt="Github icon" />
          <span>GITHUB</span>
        </NavLink>
      </nav>
    </div>
  )
}

export default Sidebar
