import styled from 'styled-components'
import { up } from 'styled-breakpoints'

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

export const  ActiveCampaigns = styled.p`    
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