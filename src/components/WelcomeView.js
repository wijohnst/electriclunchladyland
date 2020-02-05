import React, { useState,useEffect} from 'react';
import {useSpring, animated} from 'react-spring';

import "./WelcomeView.css"

export default function WelcomeView(){

  
  const [revealed, setRevealed] = useState(false);
  const [firstRevealed, setFirstRevealed] = useState(false);
  const [secondRevealed, setSecondRevealed] = useState(false);
  const [thirdRevealed, setThirdRevealed] = useState(false);
  const [bannerLoaded, setBannerLoaded] = useState(false);
  const [bannerCleared, setBannerCleared] = useState(false);
  const [bannerCompleted, setBannerCompleted] = useState(false);
  const [infoBoxLoaded, setInfoBoxLoaded] = useState(false);
  const [textToggle, setTextToggle] = useState(false);

  const bannerStyle = useSpring({
    config: {duration: 1000},
    maxWidth: bannerCleared ? "20vw" : "100vw",
    gridGap: bannerCleared ? "5px" : "0px"
  });

  const helpingStyle = useSpring({
    config: {duration: 2000},
    opacity: revealed ? 1 : 0,
    backgroundColor: bannerLoaded ? "transparent" : "rgb(161,200,179)",
    color: bannerLoaded ? "black" : "white"
  });

  const restaurantsStyle = useSpring({
    config: {duration: 2000},
    opacity: firstRevealed ? 1 : 0,
    backgroundColor: bannerLoaded ? "transparent" : "rgb(191,200,179)",
    color: bannerLoaded ? "black" : "white"
  });

  const restStyle = useSpring({
    config: {duration: 2000},
    opacity: secondRevealed ? 1 : 0,
    backgroundColor: bannerLoaded ? "transparent" : "rgb(227,200,179)",
    color: bannerLoaded ? "black" : "white"
  })

  const easyStyle = useSpring({
    config: {duration: 2000},
    opacity: thirdRevealed ? 1 : 0,
    backgroundColor: bannerLoaded ? "transparent" : "rgb(255,200,179)",
    color: bannerLoaded ? "black" : "white"
  })

  const infoStyle = useSpring({
    config: {duration: 500},
    opacity: bannerCompleted ? 1 : 0,
    height: bannerCompleted ? "auto" : "0vh",
    width: bannerCompleted ? "75vw" : "0vw"
  })

  const infoTextStyle = useSpring({
    opacity: infoBoxLoaded ? 1 : 0
  }) 
  
  useEffect(() =>{
    const loadTimer = setTimeout(() =>{
      setRevealed(true);
    }, 1000);
    return () => clearTimeout(loadTimer);
  }, []); 
  
  useEffect(() =>{
    const secondLoadTimer = setTimeout(() =>{
      setFirstRevealed(true);
    }, 1500);
    return () => clearTimeout(secondLoadTimer);
  }, []); 
 
  useEffect(() =>{
    const thirdLoadTimer = setTimeout(() =>{
      setSecondRevealed(true);
    }, 2000);
    return () => clearTimeout(thirdLoadTimer);
  }, []); 
  
  useEffect(() =>{
    const fourthLoadTimer = setTimeout(() =>{
      setThirdRevealed(true);
    }, 2500);
    return () => clearTimeout(fourthLoadTimer);
  }, []); 

  useEffect(() =>{
    const fifthLoadTimer = setTimeout(() =>{
      setBannerLoaded(true);
    }, 5000);
    return () => clearTimeout(fifthLoadTimer);
  }, []); 

  useEffect(() =>{
    const sixthLoadTimer = setTimeout(() =>{
      setBannerCleared(true);
    }, 5500);
    return () => clearTimeout(sixthLoadTimer);
  }, []);

  useEffect(() =>{
    const seventhLoadTimer = setTimeout(() =>{
      setBannerCompleted(true);
    }, 6000);
    return () => clearTimeout(seventhLoadTimer);
  }, []);

  useEffect(() =>{
    const eigthLoadTimer = setTimeout(() =>{
      setInfoBoxLoaded(true);
    }, 6500);
    return () => clearTimeout(eigthLoadTimer);
  }, []);

  return(
    <div id="welcome-view-wrapper">
      <animated.div id="welcome-banner-wrapper" style={bannerStyle}>
        <animated.div className="banner-div" id="helping" style={helpingStyle}> Helping </animated.div>
        <animated.div className="banner-div"id="restaurants" style={restaurantsStyle}> restaurants</animated.div>
        <animated.div className="banner-div" id="rest" style={restStyle} >rest</animated.div>
        <animated.div className="banner-div" id="easy" style={easyStyle}>easy.</animated.div>
      </animated.div><br />
      <animated.div className="card" id="welcome-info-wrapper" style={infoStyle}>
        <animated.div style={infoTextStyle} id="info-text-wrapper"> 
          <p>Modern hospitality brands face more challenges than ever. We understand the problems that today's restaurants face because we've experinced them first hand. At Electric Lunch Lady Land, we have over 30 years of combined expereince in the food and beverage industry.</p>
          <p>And what did we learn in that time?</p>
          <div id="punch-span"><strong>How to turn obstacles into opportunities.</strong></div><br />
          <p>And seizing opportunity starts with gaining control of your business; brining order and process to the otherwise chaotic world of food and beverage service.</p>
          <p> For information about our end-to-end restaurant consultation and brand resuscitation services, please check out EL3 Consultants above.</p>
          <p> {`To learn how our custom technology tools can put you in contol (and at ease), click ChefSuite to see some of our back and front-of-house applications in action`}</p>
          <div id="signature-div">⚡️ -{` Will & Marshall`}</div>
        </animated.div>
      </animated.div>
    </div>
  )
}


