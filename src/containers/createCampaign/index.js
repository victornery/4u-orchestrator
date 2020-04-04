import React from 'react'

import { CreateCampaignContainer, ListButtons, Telephone } from './style'

import ImgTelephone from '@assets/imgTelephone.png'
import ImgText from '@assets/imgText.png'
import imgGeneric from '@assets/imgGeneric.png'
import ImgVideo from '@assets/imgVideo.png'
import imgContact from '@assets/imgContact.png'


const CreateCampaign = () => {
    return(
        <CreateCampaignContainer>
            <ListButtons>
                <button><img src={ImgText} /></button>
                <button><img src={imgGeneric} /></button>
                <button><img src={ImgVideo} /></button>
                <button><img src={imgContact} /></button>
            </ListButtons>

            <Telephone src={ImgTelephone} />

        </CreateCampaignContainer>
    );
}

export default CreateCampaign;