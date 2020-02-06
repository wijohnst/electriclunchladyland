import React, {useState, useEffect} from 'react'
// import './El3ServicesCard.css'

import Service from "./Service.js"

export default function El3ServicesCard() {
  const [services, setServices] = useState(undefined);

   useEffect( () => {
    
    const texts = ["FOH & BOH Ideation", "Pre & Post Launch Support", "Staff Training", "Brand Resuscitation", "Restaurant Management Software", "Web Design", "Menu Design", "Bar Program Design"];

    const services = [];
    
    texts.map((text, index) =>{
      services.push(<Service text={text} key={index} />)
    })

    setServices(services);
   }, [])
    
  return (
    <div id="el3-services-card-component-wrapper">
      <div className="card" id="el3-services-card">
        <h3 id="services_banner">Our Services:</h3> 
          {services}
      </div>
    </div>
  )
}
