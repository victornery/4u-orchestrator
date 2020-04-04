import styled from 'styled-components'
import { up } from 'styled-breakpoints'

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
