import React from 'react'
import "./Header.css"
import img from "./header-img.png"

function Header() {
  return (
    <div className="header-container">
        <img className="header-img" src={img} alt="header-img" />
        <h1 className="header-title">Levi's Dinner</h1>
        <p className="header-params">The best burgers in town.</p>
    </div>
  )
}

export default Header