import styled from 'styled-components'
import { up } from 'styled-breakpoints'


export const ButtonsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 100px;
	${up('tablet')} {
		flex-direction: row;
		margin-top: 105px;
		justify-content: center;
	}
`

export const Button = styled.div`
	position: relative;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	background: #503366;
	width: 250px;
	height: 300px;
	margin-bottom: 20px;

	img{
		margin: 74px 41px 41px 41px;				
	}

	span{
		color: #fff;
		display: flex;
		position: relative;
		margin: 0 auto;
		justify-content: center;
		font-size: 24px;
	}

	${up('tablet')} {
		margin-right: 92px;
		width: 302px;
		height: 419px;
		
		&:last-child {
			margin-right: 0;
		}
	}
`
