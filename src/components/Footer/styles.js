import styled from 'styled-components'
import { up } from 'styled-breakpoints'

export const StyledFooter = styled.footer`
  width: 100%;
  border: 1px solid red;
  border-color: red;

  ${up('tablet')} {
    border-color: green;
  }

  ${up('desktop')} {
    border-color: green;
  }
`