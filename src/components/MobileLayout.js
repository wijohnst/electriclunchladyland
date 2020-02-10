import React, {useState, useEffect} from 'react'
import styled, {ThemeProvider} from "styled-components"

import MobileHeader from "./mobile/MobileHeader"
import MobileNav from "./mobile/MobileNav"
import MobileView from "./mobile/MobileView"
import MobileFoot from "./mobile/MobileFoot"

export default function MobileLayout() {

  //DECLARATIONS
  const [screenWidth, setScreenWidth] = useState(undefined);
  const [isUnderConstruction, setUnderConstruction] = useState(false);

  //LIFECYCLE
  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, [])

  //STYLING

  const MobileBannerWrapper = styled.div`
    background-color: lightpink;
    display : flex;
    flex-flow: column wrap;
    align-items: center;
    text-align: center;
    height: 75vh;
    width: 100vw;
  `

  const MobileBanner = styled.h2`
    max-width: 75%;
    padding: 20px;
  `

  const EmojiWrapper = styled.div`
    background-color: lightpink;
    font-size: 40px;
    text-align: center;
  `
  const theme = {
  textColor: "rgba(234, 224, 204, 1)",
  accentColor1: "rgba(220, 133, 31, 1)",
  backgroundColor1: "rgba(99, 112, 129, 1)",
  accentColor2: "rgba(201, 173, 161, 1)",
  backgroundColor2: "rgba(83, 107, 120, 1)"
  }

  const MobileLayoutWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background-color: rgba(99, 112, 129, 1);
  height: 100vh;
  font-family: "Montserrat", sans-serif;
`

  if(isUnderConstruction){
  return (
    <div>
      <MobileBannerWrapper>
        <MobileBanner>For full expereince, please visit our desktop site. Mobile coming soon!</MobileBanner>
      </MobileBannerWrapper>
      <EmojiWrapper>
        <p>⚡️🌮👩‍🍳🏔</p>
      </EmojiWrapper>
    </div>
  )
}else{
  return(
    <div>
      <ThemeProvider theme={theme}>
        <MobileLayoutWrapper>
          <MobileHeader />
          <MobileNav />
          <MobileView />
          <MobileFoot />
        </MobileLayoutWrapper>
      </ThemeProvider>
    </div>
  )
}
}
