import React from 'react';
import "./headerBoxes.css";
import HeaderBox from "./headerBox";
import PrintLogo from "./printLogo";



const HeaderBoxes = ({handleView}) => {
  
  const uuid = require('uuid/v1');

  const displayDimensions = () =>{
    let width = Math.floor(window.innerWidth/150);
    let boxes = [];
    let colorVal = 161;
    
    for(let x = 1; x <= (width - 2); x++){
      let key = uuid();
      boxes.push(<HeaderBox key={key} color= {colorVal}  index={x} handleView={handleView}/>)
      colorVal = colorVal + (14 + x);
    }
    return boxes;
  }
  
  let boxes = displayDimensions();
  window.addEventListener("resize", displayDimensions.bind());
  return (
    <div id="boxes-wrapper">
      <PrintLogo />
      {boxes}
    </div>
  );
}

export default HeaderBoxes;
