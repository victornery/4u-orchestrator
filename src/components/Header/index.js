import React from 'react'
import { StyledHeader, LogoHeader, Menu, MenuLine, MenuLine2, MenuLine3, LogoBgWhite, LogoBgPurple, TextLogo } from './style'

const Header = ({ isLogged = false }) => {
	
	console.log(!!isLogged)

	return (
	<StyledHeader>
		{
			!!isLogged && (
				<Menu>
					<MenuLine />
					<MenuLine2 />
					<MenuLine3 />
				</Menu>
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