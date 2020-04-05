import React, { Fragment } from 'react'
import { 
	StyledHeader,
	LogoHeader,
	Menu,
	LogoBgWhite,
	LogoBgPurple,
	TextLogo,
	TitleName,
	NumberCampaigns,
	ActiveCampaigns,
	UserHolder
} from './style'
import Drawer from '@components/Drawer'

const Header = ({ isLogged = false }) => {
	return (
		<StyledHeader>
			{
				!!isLogged && (
					<Fragment>
						<Menu />
						<UserHolder>
							<TitleName>Olá, Fulando de tal</TitleName> 
							<NumberCampaigns>Campanhas agendadas: 3</NumberCampaigns>
							<ActiveCampaigns>
								Campanhas Ativas: 3<br />
								Saldo: R$ 350,00
							</ActiveCampaigns>
						</UserHolder>
						<Drawer/>
					</Fragment>
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