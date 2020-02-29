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
    padding: ${tokens.spacing.medium}px 0 ${tokens.spacing.xsmall}px;
    margin: 0 auto;
    max-width: ${tokens.CONTENT_WIDTH}px;
  `

  const Nav = styled.nav`
    display: grid;
    grid-template-columns: 1fr auto auto;
    grid-gap: ${tokens.spacing.large}px;
    align-items: center;
  `

  const TitleLink = styled(Link)`
    color: ${tokens.colors.heading};
    font-size: ${tokens.font.size.h2};
    font-weight: 800;
    letter-spacing: -0.2px;
  `

  const NavLink = styled(Link)`
    font-size: ${tokens.font.size.h3};
    font-weight: 600;
  `

  return (
    <StyledHeader>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Duks - Project Management for Changing Teams</title>
      </Helmet>
      <Nav>
        <TitleLink to="/">{siteTitle}</TitleLink>
        <NavLink href="https://app.duks.site/login">
          Sign Up
        </NavLink>
        <NavLink href="https://app.duks.site/login">Log In</NavLink>
      </Nav>
    </StyledHeader>
  )
}

export default Header
