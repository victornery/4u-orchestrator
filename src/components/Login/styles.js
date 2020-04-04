import styled from 'styled-components'
import { TextField } from '@material-ui/core'

export const LoginHolder = styled.div`
  width: 100%;
  max-width: 340px;
  margin: 0 auto;
  transform: translateY(100px);
  background: #fff;
`

export const StyledInput = styled(TextField)`
  width: 100%;
  display: block;
  margin: 0 0 20px !important;
`