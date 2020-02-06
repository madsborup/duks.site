import React from "react"
import styled from "styled-components"
import Link from "./designSystem/Link"
import tokens from "./designSystem/tokens"

interface Props {
  siteTitle: string
}

const Header: React.FC<Props> = ({ siteTitle }: Props) => {
  const StyledHeader = styled.div`
    border-bottom: 1px solid ${tokens.colors.border};
    padding: ${tokens.spacing.large}px 0 ${tokens.spacing.xsmall}px;
    margin-bottom: ${tokens.spacing.xlarge}px;
  `

  const Nav = styled.nav`
    display: grid;
    grid-template-columns: 1fr auto auto;
    grid-gap: ${tokens.spacing.large}px;
    margin: 0 auto;
    align-items: center;
    max-width: ${tokens.CONTENT_WIDTH}px;
  `

  const NavLink = styled(Link)`
    font-size: ${tokens.font.size.h3};
    font-weight: 600;
    letter-spacing: -0.2px;
  `

  return (
    <StyledHeader>
      <Nav>
        <NavLink to="/">
          {siteTitle}
        </NavLink>
        <NavLink to="/signup" primary>
          Sign Up
        </NavLink>
        <NavLink href="https://app.duks.site/login">Log In</NavLink>
      </Nav>
    </StyledHeader>
  )
}

export default Header
