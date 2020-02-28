import styled from 'styled-components'
import tokens from './tokens'

export default styled.h1`
  font-size: ${tokens.font.size.h1};
  color: ${tokens.colors.heading};
  margin-bottom: ${tokens.spacing.small}px;
  line-height: 1.3;
  font-weight: 800;
`;