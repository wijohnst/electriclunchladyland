import React, {useState} from 'react'
import styled from 'styled-components'

export default function MobileNav() {

  const [navIsVisible, setNavIsVisible] = useState(false);

  const MobileNavWrapper = styled.div`
    /* display: flex;
    flex-direction: row; */
    width: 75vw;
    margin-top: 10px;
  `
  const ViewNameWrapper = styled.div`
   padding: 10px;
   text-align: center;
   width: 75%;
   flex-shrink: 1;
   display: inline-block;
  `
  const HamburgerIconWrapper = styled.div`
   padding: 10px;
   /* text-align: right; */
   width: 25%;
   display: ${() => navIsVisible ? 'none' : 'inline-block'};
  `
  const MobileNavMenu = styled.div`
    padding: 10px;
    border: solid thin ${(props) => props.theme.accentColor1};
    background-color: ${(props) => props.theme.textColor};
    visibility: ${() => navIsVisible ? 'visible' : 'hidden'};
    flex-flow: column wrap;
    border-radius: 5px 5px;
    box-shadow: -5px 5px 7px ${(props) => props.theme.backgroundColor2};
    text-align: right;
  `
  const NavLink = styled.p`
    /* margin-top: 50%; */
    text-align: center;
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
        <NavLink> EL3 Consultants </NavLink>
        <NavLink> ChefSuite </NavLink>
        <NavLink> About </NavLink>
        <NavLink> Contact </NavLink>
      </MobileNavMenu>
    </MobileNavWrapper>
  )
}
