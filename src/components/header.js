// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
// import PrintLogo from "./printLogo"
import HeaderBoxes from "./headerBoxes"

const Header = ({backgroundColor, handleView})=> {
  
  let style = {
    backgroundColor: `${backgroundColor}`
  }

  return(
   <div style={style}>
   <HeaderBoxes handleView={handleView}/>
   </div>
 )
}

export default Header
