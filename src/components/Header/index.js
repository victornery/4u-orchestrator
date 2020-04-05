import React, { Fragment, useContext } from 'react'
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
import { ThemeContext } from '@context'
import { transformMoney } from '@utils/money'

const Header = ({ isLogged = false }) => {

	const context = useContext(ThemeContext)

	// prank with trump hahaha im sorry
	const sumWallets = (billios_and_billions) => {
		const money = billios_and_billions
		let listMoney = []
		const reducer = (accumulator, actualValue) => accumulator + actualValue
		let total = 0

		if(money.length >= 1) {
			console.log('wallet é maior ou igual que 1')
			money.map(({ value }) => listMoney.push(parseFloat(value)))

			total = listMoney.reduce(reducer)

			return transformMoney(total)
		}

		return transformMoney(total)
	}

	console.log(context)
	return (
		<StyledHeader>
			{
				!!isLogged && (
					<Fragment>
						<Menu />
						<UserHolder>
							<TitleName>{ context && context.user && context.user.fullname ? `Olá, ${context.user.fullname}` : 'Seja bem-vindo' }</TitleName>
							{
								context && context.user && context.user.role.type !== "authenticated" && (
									<Fragment>
										<NumberCampaigns>Campanhas agendadas: 3</NumberCampaigns>
										<ActiveCampaigns>
											Campanhas Ativas: 3<br />
											Saldo: {context && context.wallet !== {} && sumWallets(context.wallet)}
										</ActiveCampaigns>
									</Fragment>
								)
							}
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