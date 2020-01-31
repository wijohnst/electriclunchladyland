import React from 'react'
import './ViewArea.css'
import Heading from './Heading.js'
import ViewHandler from './ViewHandler'
function ViewArea({headingText}) {
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

export default ViewArea
