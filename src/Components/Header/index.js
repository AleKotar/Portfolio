import './index.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <NavLink exact to="/">
        <div className="header-text">
          <h1>Aleksander Kotarski</h1>
        </div>
      </NavLink>
    </div>
  )
}

export default Header
