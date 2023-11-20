import React from 'react'
import './index.css'

const Icon = ({ src }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="40px"
    height="40px"
  >
    <path d={src} />
  </svg>
)

export default Icon
