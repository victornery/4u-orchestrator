import styled from 'styled-components'
import { Link } from 'react-router-dom'
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

	${props => props.smaller ? `
		max-height: 200px;
    border: none;
    box-shadow: none;
    margin-bottom: 80px;
	` : ''}

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
// End Style Menu Toggle

export const UserHolder = styled.div``

// Logo
export const LogoHeader = styled(Link)`
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translate(-50%, 50%);
	text-decoration: none;
	transition: .5s all;

	&:hover {
		transform: translate(-50%, 50%) scale(1.1);
	}
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

export const TitleName = styled.h1`
	position: absolute;
	font-family: Montserrat;
	left: 15px;
	top: 50px;
	font-style: normal;
	font-weight: 400;
	font-size: 22px;
	line-height: 59px;
	color: #FFFFFF;

	${up('tablet')} {
		left: 47px;
		top: 68px;
		font-size: 48px;
	}
`
export const NumberCampaigns = styled.p`
	position: absolute;
	width: 210px;
	height: 20px;
	left: 15px;
	top: 100px;
	font-family: Montserrat;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 20px;
	color: #FFFFFF;

	${up('tablet')} {
		left: 47px;
		top: 130px;
		font-size: 16px;
	}
`

export const ActiveCampaigns = styled.p`    
	position: absolute;
	top: 14px;
	right: 0;
	padding-right: 15px;
	font-family: Montserrat;
	font-size: 12px;
	line-height: 20px;
	color: #FFFFFF;
	text-align: right;
	
	${up('tablet')} {
		top: 15px;
		font-size: 16px;
	}
`