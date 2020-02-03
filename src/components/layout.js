/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Header from "./header"
import "./layout.css"


const Layout = ({handleView}) => {

  return(
    <Header handleView={handleView}/>
  )
}

export default Layout
