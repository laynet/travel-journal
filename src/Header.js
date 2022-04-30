import React from 'react'
import globeIcon from './images/globe-icon.png'

const Header = () => {
  return (
    <div className="header">
        <img src={globeIcon} alt="" />
        <h3>my travel journal.</h3>
    </div>
  )
}

export default Header