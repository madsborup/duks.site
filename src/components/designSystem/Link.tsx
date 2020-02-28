import React, { ReactNode, ReactElement } from "react"
import styled from "styled-components"
import { Link as GatsbyLink, GatsbyLinkProps } from "gatsby"
import tokens from "./tokens"

interface InternalLinkProps {
  to: string
  activeClassName?: string
  primary?: boolean;
}

interface ExternalLinkProps {
  href: string
  primary?: boolean;
}

interface CommonLinkProps {
  children: ReactNode
  className?: string
  primary?: boolean;
  [x: string]: any;
}

type LinkProps = CommonLinkProps &
  (InternalLinkProps | ExternalLinkProps)

const InternalLink = styled(GatsbyLink)<InternalLinkProps>`
  color: ${({ primary }) => primary ? tokens.colors.white : tokens.colors.heading};
  background: ${({ primary }) => primary ? tokens.colors.primary : 'none'};
  text-decoration: none;
  font-size: ${tokens.font.size.regular};
  border-radius: ${tokens.BORDER_RADIUS}px;
  padding: ${({ primary }) => primary ? `${tokens.spacing.xsmall}px ${tokens.spacing.medium}px` : 0};

  &:hover {
    text-decoration: none;
  }
`

const ExternalLink = styled.a<ExternalLinkProps>`
  color: ${({ primary }) => primary ? tokens.colors.white : tokens.colors.heading};
  text-decoration: none;
  font-size: ${tokens.font.size.regular};
  background: ${({ primary }) => primary ? tokens.colors.primary : 'none'};
  border-radius: ${tokens.BORDER_RADIUS}px;
  padding: ${({ primary }) => primary ? `${tokens.spacing.xxsmall}px ${tokens.spacing.small}px` : 0};

  &:hover {
    text-decoration: none;
  }
`

const Link: React.FC<LinkProps> = ({
  to,
  href,
  className,
  activeClassName,
  primary,
  children,
}: LinkProps): ReactElement<typeof GatsbyLink | HTMLAnchorElement> => {
  return to ? (
    <InternalLink to={to} activeClassName={activeClassName} className={className} primary={ primary }>{children}</InternalLink>
  ) : (
    <ExternalLink href={href} className={className} primary={ primary }>{children}</ExternalLink>
  )
}

export default Link
