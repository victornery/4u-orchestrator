import styled from 'styled-components'
import { up } from 'styled-breakpoints'

export const StyledHeader = styled.header`
	position: relative;
	width: 100%;
	height: 200px;
	background: #503366;
	border: 1px solid #000000;
	box-sizing: border-box;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

	${up('tablet')} {
		height: 40vh;
	}

`
// Style Menu Toggle
export const Menu = styled.div`
	position: absolute;
	width: 33px;
	height: 24px;
	left: 15px;
	top: 15px;

	${up('tablet')} {
		left: 26px;
	}
`
export const MenuLine = styled.div`
	position: absolute;
	width: 28px;
	height: 5px;
	background: #FFFFFF;
`
export const MenuLine2 = styled.div`
	position: absolute;
	width: 33px;
	height: 5px;
	top: 10px
	background: #FFFFFF;
`
export const MenuLine3 = styled.div`
	position: absolute;
	width: 28px;
	height: 5px;
	top: 20px
	background: #FFFFFF;
`
// End Style Menu Toggle

// Logo
export const LogoHeader = styled.div`
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translate(-50%, 50%);
`
export const LogoBgPurple = styled.div`
	width: 99px;
	height: 99px;
	margin: 0 auto;
	position: relative;
	top: 10%;
	background: #503366;
	border-radius: 100px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const LogoBgWhite = styled.div`
	width: 127px;
	border-radius: 100px;
	height: 127px;
	background: #FFFFFF;
	box-shadow: inset 0px 4px 5px rgba(0, 0, 0, 0.25);
`

export const TextLogo = styled.div`
	font-family: 'Montserrat';
	font-size: 36px;
	line-height: 22px;
	text-align: center;
	color: #FFFFFF;
	padding-top: 18px;
	
	& h3 {
		font-size: 36px;
		line-height: 30px;
		font-weight: 300;
		display: block;
	}

	& span {
		font-size: 24px
	}
`