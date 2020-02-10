import React, {useState} from 'react'
import styled from 'styled-components'

export default function MobileNav() {

  const [navIsVisible, setNavIsVisible] = useState(false);

  const MobileNavWrapper = styled.div`
    /* background-color: lightpink; */
    display: flex;
    flex-direction: row;
    width: 75vw;
  `
  const ViewNameWrapper = styled.div`
   padding: 10px;
   text-align: center;
   width: 75%;
  `
  const HamburgerIconWrapper = styled.div`
   padding: 10px;
   text-align: right;
   width: 25%;
   display: ${() => navIsVisible ? 'none' : 'block'};
  `
  const MobileNavMenu = styled.div`
    padding: 10px;
    background-color: lightpink;
    height: 75vh;
    display: ${() => navIsVisible ? 'block' : 'none'};
  `
  const toggleViews = () =>(
    setNavIsVisible(!navIsVisible)
  )
  return (
    <MobileNavWrapper>
      <ViewNameWrapper>
        <h3>Welcome</h3>
      </ViewNameWrapper>
      <HamburgerIconWrapper>
        <i className="fas fa-bars" role="button" onMouseDown={toggleViews} />
      </HamburgerIconWrapper>
      <MobileNavMenu>
        <i className="fas fa-bars" role="button" onMouseDown={toggleViews} />
        <p> EL3 Consultants </p>
      </MobileNavMenu>
    </MobileNavWrapper>
  )
}
