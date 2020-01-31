import React, { useState, useEffect } from "react"

// Component Import
import Layout from "../components/layout"
import ViewArea from "../components/ViewArea"


const IndexPage = () => {
  
  const el3Color = 'rgb(161,200,179)';
  const chefSuiteColor = 'rgb(191,200,179)';
  const aboutColor = 'rgb(227,200,179)';
  const contactColor = 'rgb(255,200,179)';

  

  const [viewName, setViewName] = useState('index');
  const [bgColor, setBgColor] = useState('white');
  const [heading, setHeading] = useState('Welcome');
  
  let style = {
    backgroundColor: `${bgColor}`
  }
  
  const handleView = (viewName) =>{
    setViewName(viewName);
  }
  
  useEffect( () =>{

      switch(viewName){
        default:
          setBgColor('white')
          setHeading(viewName)
          break;
        case 'EL3 Consultants':
          setBgColor(el3Color)
          setHeading(viewName)
          break;
        case 'ChefSuite':
          setBgColor(chefSuiteColor)
          setHeading(viewName)
          break;
        case 'About':
          setBgColor(aboutColor)
          setHeading(viewName)
          break;
        case 'Contact':
          setBgColor(contactColor)
          setHeading(viewName)
          break;
        case 'index':
          setHeading('Welcome')

      
    }
  })

  return(
  <div style={style}>
    <Layout handleView={handleView} />
    <ViewArea />
  </div>
  
  )
}

export default IndexPage
