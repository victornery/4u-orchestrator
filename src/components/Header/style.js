import styled from 'styled-components'
import { up } from 'styled-breakpoints'

export const StyledHeader = styled.header`
    position: absolute;
    width: 100%;
    height: 365px;
    left: 0px;
    top: 0px;

    background: #503366;
    border: 1px solid #000000;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

`

export const StyledLogo = styled.div`         
    position: relative;
    display: flex;
    margin: 0 auto;
    top: 85%;
    width: 127px;
    height: 127px;
    background: #FFFFFF;
    border-radius: 100px;
    box-shadow: inset 0px 4px 5px rgba(0, 0, 0, 0.25);
`

export const StyleLogoIntro = styled.div`
    border-radius: 100px;
    
    width: 99px;
    height: 99px;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    background: #503366;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const StyleTitle = styled.div`
    position: absolute;
    left: 47px;
    top: 68px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
    line-height: 59px;
    /* identical to box height */

    color: #FFFFFF;


`