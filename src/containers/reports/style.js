import styled from 'styled-components'
import { up } from 'styled-breakpoints'

export const TitleCampaing = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	p{
		margin: 39px 82px;
	}
	svg{
		margin: 39px 82px;
		fill: #C4C4C4;
		width: 35px;
  	height: 35px;
	}
`
export const ContentReports = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 100px;
	${up('tablet')} {
			flex-direction: row;
			margin-top: 60px;
			justify-content: center;
	}

	div:nth-child(2){
		margin: 0 30px;
	}
`
export const Chart = styled.div`
	flex-direction: column;
	h2{
		font-weight: 500;
		font-size: 36px;
		line-height: 44px;
		text-align: center;	
		color: #503366;
		margin-bottom: 20px;
	}
`

export const ColumnChart = styled.div`
	width: 362px;
	height: 362px;
	justify-content: center;
	display:flex;
	align-items: flex-end;

	div{
		width: 57px;
		height: 140px;	
		background: #C4C4C4;
	}
	div:nth-child(2){
		height: 287px;
		margin: 0 50px;
	}
	div:nth-child(3){
		height: 341px;
	}
`