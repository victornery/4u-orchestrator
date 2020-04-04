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