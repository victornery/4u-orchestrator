import React, { Fragment } from 'react'
import { TitleName, NumberCampaigns, ActiveCampaigns } from './style'

const HeaderContent = () => {
	return(
		<Fragment>
				<TitleName>Olá, Fulando de tal</TitleName> 
				<NumberCampaigns>Campanhas agendadas: 3</NumberCampaigns>
				<ActiveCampaigns>
				<p>Campanhas Ativas: 3</p>
				<p>Saldo: R$ 350,00</p>
				</ActiveCampaigns>
		</Fragment>
	);
}

export default HeaderContent;