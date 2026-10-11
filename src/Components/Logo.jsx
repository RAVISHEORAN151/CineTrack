import React from 'react'
import '../Logo.css'
import clapperboardIcon from '../assets/clapperboard.png'

function Logo() {
  return (
    <span className="logo-wrapper">
      <span className="logo-glow" aria-hidden="true"></span>
      <span className="logo-box">
        <img 
          src={clapperboardIcon} 
          alt="watched" 
          className="w-12 h-12 inline-block logo-icon" 
          aria-hidden="true" 
        />
      </span>
    </span>
  )
}

export default Logo
