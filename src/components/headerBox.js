import React, { useState } from 'react';
import './headerBox.css';
 
const HeaderBox = ({color, index, handleView}) => {

  const [hover, setHover] = useState(false);
  
  
  let style;

  const setHoverTrue = () =>{
   setHover(true);
  }

  const setHoverFalse = () =>{
    setHover(false);
  }

  const handleClick = (text) =>{
    handleView(text.text);
  }
  
  if(hover === false){
    style = {
      transition: "all 0.3s",
      backgroundColor: `rgb(${color},200,179)`,
      color: `#707070`
    }
  }else{
    style = {
      transition: "all 0.3s",
      backgroundColor: `rgb(${color},200,179)`,
      color: "white",
      cursor: "pointer"
    }
  }

  let text;

  switch(index){
    
    case(1):
    text = "EL3 Consultants";
    break;

    case(3):
    text = "ChefSuite"
    break;

    case(5):
    text = "About"
    break;

    case(7):
    text = "Contact"
    break;

    default:
    text=""
    break;
  }
  return (
    <div role="button" className="header-box" style={style} onMouseOver={setHoverTrue} onFocus={setHoverTrue} onMouseLeave={setHoverFalse} onClick={ () => handleClick({text})} onKeyPress={ () => handleClick({text})} tabIndex={0} > 
      {text}
    </div>
  );
}

export default HeaderBox;
