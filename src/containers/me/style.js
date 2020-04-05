import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { up } from 'styled-breakpoints'


export const ButtonsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 100px;
	overflow: hidden;

	${up('tablet')} {
		flex-direction: row;
		margin-top: 105px;
		justify-content: center;
	}
`

export const SubButton = styled.div`
	background: #503366;
	height: 91px;
	flex-basis: 50%;
	text-align: center;
	transition: .5s all;

	&:hover {
		background: #9785a4;
	}

	& img {
		margin: 12px 0 0 !important;
	}

	& span {
		font-size: 16px !important;
		line-height: 20px !important;
		text-transform: lowercase;
	}
`

export const SubButtons = styled.div`
	display: inline-flex;
	width: 100%;
	position: absolute;
	bottom: 0;
	transform: translateY(120%);
	transition: .5s all;
	box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);

	${props => props.full && `
		& ${SubButton} {
			flex-basis: 100% !important;
		}
	`}
`

export const Button = styled(Link)`
	position: relative;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	background: #503366;
	width: 250px;
	height: 300px;
	margin-bottom: 20px;
	transition: .5s all;
	text-decoration: none;

	&:hover {
		background: rgba(80, 51, 102, 0.6);

		${SubButtons} {
			transform: translateY(0);
		}
	}

	& img {
		margin: 74px 41px 41px 41px;
		pointer-events: none;
	}

	span {
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
		margin-bottom: 0;

		&:last-child {
			margin-right: 0;
		}
	}
`