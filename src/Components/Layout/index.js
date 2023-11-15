import './index.css'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'
import Header from '../Header'

const Layout = () => {
  return (
    <div className="app">
      <Header />
      <Sidebar />

      <div className="page">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
