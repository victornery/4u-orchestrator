import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
		*,
    *::after,
    *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
    text-rendering: geometricPrecision;
		}
						
    ul {
    list-style: none;
    }
`

export default GlobalStyle;