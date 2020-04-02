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
export const ButtonsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;	
	margin: 120px 15px 105px 15px;
	${up('tablet')} {
		flex-direction: row;
		margin: 105px 175px 105px 175px;
	}
`

export const Button = styled.div`
	position: relative;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	background: #503366;
	width: 250px;
	height: 300px;
	margin-bottom: 20px;

	${up('tablet')} {
		margin-right: 92px;
		width: 302px;
		height: 419px;
		
		&:last-child {
			margin-right: 0;
		}
	}
`
