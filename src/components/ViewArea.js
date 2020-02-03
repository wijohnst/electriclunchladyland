import React from 'react'
import './ViewArea.css'
import El3 from './El3'
import WelcomeView from './WelcomeView'

export default function ViewArea({view}) {
  switch(view){
    default:
      return(
        <div className="view-area-wrapper">
          <WelcomeView />
        </div>
      )
    case('index'):
      return(
        <div className="view-area-wrapper">
          <WelcomeView />
        </div>
      )
    case('EL3 Consultants'):
      return(
        <div className="view-area-wrapper">
          <El3 />
        </div>
      )
  }

}

