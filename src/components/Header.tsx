import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import Link from "./designSystem/Link"
import tokens from "./designSystem/tokens"

interface Props {
  siteTitle: string
}

const Header: React.FC<Props> = ({ siteTitle }: Props) => {
  const StyledHeader = styled.div`
    background: ${tokens.colors.white};
    border-bottom: 1px solid ${tokens.colors.border};
    padding: ${tokens.spacing.large}px 0 ${tokens.spacing.xsmall}px;
    margin-bottom: calc(${tokens.spacing.large}px * 2);
    width: 100%;
  `

  const Nav = styled.nav`
    display: grid;
    grid-template-columns: 1fr auto auto;
    grid-gap: ${tokens.spacing.large}px;
    margin: 0 auto;
    align-items: center;
    max-width: ${tokens.CONTENT_WIDTH}px;
  `

  const TitleLink = styled(Link)`
    font-size: ${tokens.font.size.h2};
    font-weight: 700;
    letter-spacing: -0.2px;
    color: ${tokens.colors.primary};
  `

  const NavLink = styled(Link)`
    font-size: ${tokens.font.size.h3};
    font-weight: 500;
    letter-spacing: -0.2px;
  `

  return (
    <StyledHeader>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Duks - Project Management for Changing Teams</title>
      </Helmet>
      <Nav>
        <TitleLink to="/">{siteTitle}</TitleLink>
        <NavLink to="/signup" primary>
          Sign Up
        </NavLink>
        <NavLink href="https://app.duks.site/login">Log In</NavLink>
      </Nav>
    </StyledHeader>
  )
}

export default Header
