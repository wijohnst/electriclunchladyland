import React from 'react'
import "./El3.css"

import El3Logo from "./El3Logo"
import El3Banner from "./El3Banner"

export default function El3() {
  return (
    <div id="component-wrapper">
      <div className="card" id="el3-component-wrapper">
        <div id="el3-logo-component-wrapper">
          <El3Logo />
        </div>
        <div id="el3-banner-component-wrapper">
          <El3Banner />
        </div>
      </div>
    </div>
  )
}
