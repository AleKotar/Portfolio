import './index.css'
import { NavLink, Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../Assets/Logo.svg'
import { ReactComponent as CV } from '../Assets/CV.svg'
import { ReactComponent as Contact } from '../Assets/Contact.svg'
import { ReactComponent as Linkedin } from '../Assets/LinkedIN.svg'
import { ReactComponent as Home } from '../Assets/Home.svg'
import { ReactComponent as Github } from '../Assets/github-mark-white.svg'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link>
        <div className="logo">
          <Logo alt="Logo" />
        </div>
      </Link>
      <nav>
        <NavLink exact to="/" className="nav-home">
          <Home alt="home icon" />
          <h5>Home</h5>
        </NavLink>
        <NavLink exact to="/Resume" className="nav-cv">
          <CV alt="CV icon" />
          <h5>Resume</h5>
        </NavLink>
        <NavLink exact to="/Contact" className="nav-contact">
          <Contact alt="Contact icon" />
          <h5>Contact</h5>
        </NavLink>
        <NavLink exact to="/Linkedin" className="nav-linkedin">
          <Linkedin alt="Linkedin icon" />
          <h5>Linkedin</h5>
        </NavLink>
        <NavLink exact to="/Github" className="nav-github">
          <Github alt="Github icon" />
          <h5>Github</h5>
        </NavLink>
      </nav>
    </div>
  )
}

export default Sidebar
