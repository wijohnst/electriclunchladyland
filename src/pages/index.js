  //Componant to generate a set of variables based on user navigation. Some variables are consumed for global styling. Others are passed to child components and are used for rendering content and further styling. 

import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import ViewArea from "../components/ViewArea"
import Heading from "../components/Heading"

const IndexPage = () => {
  
  const el3Color = 'rgb(161,200,179)';
  const chefSuiteColor = 'rgb(191,200,179)';
  const aboutColor = 'rgb(227,200,179)';
  const contactColor = 'rgb(255,200,179)';

  const [viewName, setViewName] = useState(`index`); //updates @ <Headerbox />
  const [bgColor, setBgColor] = useState(`white`); //updates @ useEffect 
  const [heading, setHeading] = useState(`WELCOME`); //updates @ useEffect
  
  let style = { //Global Styling set here and passed to #app-wrapper 
    transition: `all 0.5s`,
    backgroundColor: `${bgColor}`
  }
  
  const handleView = (viewName) =>{ //From user input @ <HeaderBox />
    setViewName(viewName);
  }
  
  useEffect( () =>{ //bgColor consumed as styled component, heading consumed @ <Heading />

      switch(viewName){
        default:
          setBgColor('white')
          setHeading('')
          break;
        case 'EL3 Consultants':
           setBgColor(el3Color)
          setHeading("EL3 Consultants")
          break;
        case 'ChefSuite':
          setBgColor(chefSuiteColor)
          setHeading("ChefSuite")
          break;
        case 'About':
          setBgColor(aboutColor)
          setHeading("About")
          break;
        case 'Contact':
          setBgColor(contactColor)
          setHeading("Contact")
          break;
    }
  }, [viewName])

  return(
  <div id="app-wrapper" style={style}>
    <Layout handleView={handleView} />
    <Heading headingText={heading} />
    <ViewArea view={viewName} />
  </div>
  
  )
}

export default IndexPage
