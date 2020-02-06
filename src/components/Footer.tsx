import React from "react"
import styled from "styled-components"
import Link from "./designSystem/Link"
import tokens from "./designSystem/tokens"

const Footer: React.FC = () => {
  const StyledFooter = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background: ${tokens.colors.white};
    border-top: 1px solid ${tokens.colors.border};
    max-width: ${tokens.CONTENT_WIDTH}px;
    margin: 0 auto;
    padding: ${tokens.spacing.medium}px 0 ${tokens.spacing.xlarge}px;
  `

  const Section = styled.div`
    color: ${tokens.colors.textMuted};
  `

  return (
    <StyledFooter>
      <Section> 2020 </Section>
      <Section></Section>
      <Section></Section>
    </StyledFooter>
  )
}

export default Footer
