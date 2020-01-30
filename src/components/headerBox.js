import React, { useState } from 'react';
import './headerBox.css';
 


const HeaderBox = ({color, index}) => {

  const [hover, setHover] = useState(false);
  
  
  let style;

  const setHoverTrue = () =>{
   setHover(true);
  }

  const setHoverFalse = () =>{
    setHover(false);
  }

  const navigate = (e) =>{
    console.log(e.target.value);
  }
  
  if(hover === false){
    style = {
      transition: "all 0.3s",
      backgroundColor: `rgb(${color},200,179)`,
      color: `rgb(${color},200,179)`
    }
  }else{
    style = {
      transition: "all 0.3s",
      backgroundColor: `rgb(${color},200,179)`,
      color: "#707070",
      cursor: "pointer"
    }
  }

  let text;

  switch(index){
    
    case(2):
    text = "EL3 Consultants";
    break;

    case(4):
    text = "ChefSuite"
    break;

    case(6):
    text = "About"
    break;

    default:
    text=""
  }
  return (
    <div className="header-box" value={text} style={style} onMouseOver={setHoverTrue} onMouseLeave={setHoverFalse} onMouseDown={navigate}> 
      {text}
    </div>
  );
}


export default HeaderBox;
