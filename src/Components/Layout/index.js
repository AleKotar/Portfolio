import './index.css'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'
import Home from '../Home'

const Layout = () => {
  return (
    <div className="app">
      <Home />
      <Sidebar />

      <div className="page">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
