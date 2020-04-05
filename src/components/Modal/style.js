import styled from 'styled-components'

export const ModalContent = styled.div`	
	h1{
		font-weight: normal;
		font-size: 24px;
		line-height: 29px;
		color: #918699;
		text-align: center;
		margin-bottom: 20px;
	}
	
	p{
		display: flex;
		flex-direction: row-reverse;

	}

	svg{
		position: relative;
		fill: #918699;
		width: 30px;
		height: 30px;
	}

	table {
		margin-top: 30px;
		border-collapse: collapse;
		width: 100%;
	}
	
	td, th {
		padding: 8px;
		color: #918699;
	}
	th {
		border-bottom: 1px solid #ddd;
		padding-top: 12px;
		padding-bottom: 12px;
		text-align: left;
		font-size: 20px;
		line-height: 29px;
		font-weight: normal;
		color: #918699;
	}
	th:first-child{
		padding-right: 400px;
	}
	th:nth-child(2){
		padding-right: 90px
	}
`
export const InputModal = styled.input`
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
`
export const LineMidia = styled.div`
	display: flex;

	div {
		width: 250px;
		height: 200px;
		margin-top: 10px;
		background: #E8E8E8;
		position: relative;
	}
	
	div:nth-child(2) {
		margin: 10px 20px;
	}

	& input {
		width: 100%;
		height: 100%;
		opacity: 0;
	}

	& span {
		color: #666;
		font-size: 18px;
		max-width: 80%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;

		& small {
			display: block;
			font-size: 10px;
			margin-top: 10px;
		}
	}
`
export const HeadModal = styled.div`
	display: flex;
	justify-content: space-between;

	svg{
		cursor: pointer;
	}
`