import styled from 'styled-components'

export const Profile = styled.div`
	height: 95vh;
	
	img{
		display: flex;
		position: relative;
		margin: 0 auto;
		padding-top: 30px;
	}
	p{
		font-size: 32px;
		line-height: 59px;
		color: #848484;
		text-align: center;
		margin-top: 30px;
		margin-bottom: 70px;
	}

	li{
		margin: 30px 0px;
		list-style: none;
	}

	a{
		margin-left: 21px;
		font-size: 30px;
		line-height: 39px;
		color: #918699;
		text-decoration: none;	
	}

	span{
		font-size: 16px;
		line-height: 20px;
		color: #918699;
		display: flex;
		flex-direction: row-reverse;
		align-items: flex-end;
		margin-right: 20px;
	}
`
export const Menu = styled.div`
	position: absolute;
	width: 33px;
	height: 24px;
	top: 5px;
	
	svg{
		fill: #fff;
		width: 30px;
		height: 30px;
	}
`

