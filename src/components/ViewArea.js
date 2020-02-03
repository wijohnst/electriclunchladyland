import React from 'react'
import './ViewArea.css'
import El3 from './El3'
import WelcomeView from './WelcomeView'
import Chefsuite from './Chefsuite'
import About from './About'
import Contact from './Contact'

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
    case('ChefSuite'):
    return(
      <div className="view-area-wrapper">
        <Chefsuite />
      </div>
    )
  case('About'):
  return(
    <div className="view-area-wrapper">
      <About />
    </div>
  )
  case('Contact'):
  return(
    <div className="view-area-wrapper">
      <Contact />
    </div>
  )
  }

}

