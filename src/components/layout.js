/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useState} from "react"
import Header from "./header"
import "./layout.css"
import El3 from "./El3"
import ChefSuite from "./Chefsuite"
import About from "./About"
import Contact from "./Contact"

const Layout = () => {
  const [newView, setnewView] = useState(undefined)
  const handleView = (view) =>{
    setnewView(view)
  }
  if(newView === undefined){
  return (
      <Header backgroundColor="white" handleView={handleView}/>
  )
}else if(newView === "EL3 Consultants"){
  let color = `rgb(161,200,179)`;
  return(
    <div>
      <Header backgroundColor={color} handleView={handleView} />
      <El3 />
    </div>
    
  )
}else if(newView === "ChefSuite"){
  let color = `rgb(192,200,179)`;
  return(
    <div>
      <Header backgroundColor={color} handleView={handleView} />
      <ChefSuite />
    </div>
  )
}else if(newView === "About"){
  let color = `rgb(227,200,179)`;
  return(
    <div>
      <Header backgroundColor={color} handleView={handleView} />
      <About />
    </div>
  )
}else if(newView === "Contact"){
  let color = `rgb(255,200,179)`;
  return(
    <div>
      <Header backgroundColor={color} handleView={handleView} />
      <Contact />
    </div>
  )
}else{
  return <Header backgroundColor="white" handleView={handleView} />
}
}

export default Layout
