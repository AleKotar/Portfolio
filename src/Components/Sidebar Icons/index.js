import React from 'react'
import './index.css'

const SidebarIcon = ({ src, text }) => {
  return (
    <div className="sidebar-icon">
      <img src={src} alt={text} width="40" height="40" />
      <h4>{text}</h4>
    </div>
  )
}

export default SidebarIcon
