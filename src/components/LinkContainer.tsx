import React from "react"
import styled from "styled-components"
import Link from "./designSystem/Link"
import tokens from "./designSystem/tokens"

const LinkContainer: React.FC = () => {
  const StyledLinkContainer = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    grid-gap: ${tokens.spacing.medium}px;
    background: ${tokens.colors.white};
    margin: ${tokens.spacing.xlarge}px  0 ${tokens.spacing.large}px;
  `

  const SignUpButton = styled(Link)`
    text-align: center;
    font-size: ${tokens.font.size.h3};
    padding: ${tokens.spacing.xsmall}px 0;

    &:hover {
      background: ${tokens.colors.primaryMuted};
    }
  `

  const LogInButton = styled(Link)`
    text-align: center;
    font-size: ${tokens.font.size.h3};
    background: ${tokens.colors.heading};
    padding: ${tokens.spacing.xsmall}px 0;
    color: white;

    &:hover {
      background: ${tokens.colors.text};
    }
  `

  return (
    <StyledLinkContainer>
      <SignUpButton href="https://app.duks.site/login" primary>
        Sign Up
      </SignUpButton>
      <LogInButton href="https://app.duks.site/login">Log in</LogInButton>
    </StyledLinkContainer>
  )
}

export default LinkContainer
