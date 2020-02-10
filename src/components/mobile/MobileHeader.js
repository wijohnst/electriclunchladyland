import React from 'react'
import styled from 'styled-components'

import PrintLogo from "../printLogo"

export default function MobileHeader() {
  const MobileHeaderWrapper = styled.div`
    padding: 20px;
    color: ${(props) => props.theme.accentColor1};
    text-shadow: 2px 5px 2px ${(props) => props.theme.backgroundColor2};
    min-width: 75vw;
    overflow: hidden;
    border-bottom: solid thin;
    display: flex;
    flex-direction: row;
    justify-content: center;
  `
  return (
    <div>
      <MobileHeaderWrapper>
        <PrintLogo />
      </MobileHeaderWrapper>
    </div>
  )
}
