import React from 'react'
import "./El3.css"

import El3Logo from "./El3Logo"
import El3Banner from "./El3Banner"
import El3ServicesCard from "./El3ServicesCard"

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
        <div id="el3-component-copy-wrapper">
          EL3 Consultants is a full-service restaurant consulting firm with a focus on custom technology solutions for emerging brands.
        </div>
        <hr></hr>
        <div id="el3-services-card-component-wrapper">
          <El3ServicesCard />
        </div>
      </div>
    </div>
  )
}
