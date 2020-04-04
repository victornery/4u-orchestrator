import React from 'react'
import { StyledHeader, LogoHeader, LogoBgWhite, LogoBgPurple, TextLogo } from './style'
import Drawer from '@components/Drawer'

const Header = ({ isLogged = false }) => {
	
	console.log(!!isLogged)

	return (
	<StyledHeader>
		{
			!!isLogged && (
				<Drawer/>
			)
		}
		<LogoHeader>
			<LogoBgWhite>
				<LogoBgPurple>
					<TextLogo>
						<h3>4U</h3>
						<span>360</span>
					</TextLogo>
				</LogoBgPurple>
			</LogoBgWhite>
		</LogoHeader>
	</StyledHeader>
	)
}

export default Header