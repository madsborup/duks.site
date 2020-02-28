import React from "react"
import styled from "styled-components"
import tokens from "./designSystem/tokens"

const StyledWrapper = styled.div`
  max-width: ${tokens.CONTENT_WIDTH}px;
  margin: ${tokens.spacing.xlarge}px auto 0;
`

const Wrapper: React.FC = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>
}

export default Wrapper;