import React from 'react';
import NavBarHome from '../../../shared/components/navBar';
import {
    RowContainer,
    RowItem,
    ImgSize, 
    MainImageCenter,
    TitleCenter,
    HeaderContainer,
    LogoStyle
} from './initialPageStyle'
import { BackgroundContainerStyle } from '../../../shared/styles/styleBackground';

import controlFinance from '../../../shared/img/tela_principal.png'
import budget from '../../../shared/img/descontos.jpg'
import leverage from '../../../shared/img/porquinho.jpg'
import power from '../../../shared/img/anuncio.jpg'
import logo from '../../../shared/img/logo_economize.jpg'
import promotion from '../../../shared/img/logo_marca.png'


const InitialPage = () => {
    return (
        <BackgroundContainerStyle>
            <HeaderContainer>
            <LogoStyle src={promotion} alt="logo-economize-mais"/>
            <NavBarHome />
            </HeaderContainer>
            
            <TitleCenter>Os melhores descontos você só encontra aqui no BUSINESS PROMOTION</TitleCenter>
            <MainImageCenter class="img-hero" src={controlFinance} alt="controle financeiro"/>


            <RowContainer>
            
            <RowItem>
            <ImgSize src={budget} alt=""/>
            <p>Descontos que cabem no seu bolso</p>
            </RowItem>

            <RowItem>    
            <ImgSize src={leverage} alt=""/>
            <p>Você pode economizar de acordo com o seu orçamento</p>
            </RowItem>

            <RowItem> 
            <ImgSize src={power} alt=""/>
            <p>Aproveite as promoções oferecidas pensando em você</p>
            </RowItem>
            </RowContainer>
            
        </BackgroundContainerStyle>
    );
}

export default InitialPage;
