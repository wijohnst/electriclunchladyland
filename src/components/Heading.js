import React from 'react'
import "./Heading.css"

export default function Heading({headingText}) {
  return (
    <div id="heading-text-wrapper">
      <span id="heading-text"> {headingText} </span>
    </div>
  )
}
