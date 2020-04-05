import styled from 'styled-components'

export const CampaignContainer = styled.div`
	background: #503366;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-top: 120px;

	p {
		font-size: 48px;
		line-height: 59px;
		color: #FFFFFF;
		margin: 30px 0px;
	}

	span{
		margin-top: 30px;
		font-size: 16px;
		line-height: 29px;
		color: #FFFFFF;
		align-item: flex-start;
	}

	input{
		width: 800px;
		height: 60px;
		display: flex;
		padding-left: 20px;
		background: #FFFFFF;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		border-radius: 10px;
		font-size: 16px;

		:placeholder{
			color: #918699;
		}
	}

	.imgPhone{
		margin-bottom: 30px;
	}
`
export const TextTop = styled.div`
	background: #503366;
	padding-left: 30px;
	paddint-top: 20px;
	span{
		font-size: 20px;
		line-height: 29px;
		color: #FFFFFF;
		align-item: flex-start;
	}	
`
export const Buttons = styled.div`
	background: #503366;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 50px 0;
	div{
		width:800px;
		display: flex;
		justify-content: space-between;
	}
	button{
		color: #fff;
		
	}
`