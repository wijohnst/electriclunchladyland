import React from 'react'
import './ViewArea.css'
import Heading from './Heading.js'
import ViewHandler from './ViewHandler'

export default function ViewArea({headingText}) {
  return (
    <div id="view-area-wrapper">
      <div id="heading-wrapper">
        <div id="heading">
          <Heading headingText={headingText} />
        </div>
      <ViewHandler />
      </div>
    </div>
  )
}

