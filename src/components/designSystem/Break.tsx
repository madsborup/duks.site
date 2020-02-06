import styled from 'styled-components'
import tokens from './tokens'

export default styled.hr`
  background-color: ${tokens.colors.border};
  height: 2px;
  border-width: 0;
  margin: ${tokens.spacing.xlarge}px 0;
`;