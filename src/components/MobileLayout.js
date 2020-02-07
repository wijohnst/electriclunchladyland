import React, {useState, useEffect} from 'react'
import styled from "styled-components"

export default function MobileLayout() {
  
  //DECLARATIONS
  const [screenWidth, setScreenWidth] = useState(undefined);

  //LIFECYCLE
  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, [])

  //STYLING

  const MobileBannerWrapper = styled.div`
    display : flex;
    flex-flow: column wrap;
  `

  const MobileBanner = styled.h2`
    max-width: 75%;
    padding: 20px;
  `

  const EmojiWrapper = styled.div`
    /* background-color: lightpink; */
    font-size: 40px;
    text-align: center;
  `
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
}
