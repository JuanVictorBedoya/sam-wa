
/****************************************************************************************

	Copyright (c) 2018, SAM.
	Author: Juan Victor Bedoya.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';
import gql from 'graphql-tag';
import { withApollo, graphql } from 'react-apollo';

import {Button} from '../components/button.jsx';
import {Navbar, NavLink, NavBrand, NavUser, NavUserLink, NavUserSeparator, NavUserActionButton} from '../components/navbar.jsx';
import {AppLogo_0} from '../components/app-logo.jsx';
import {TextInput} from '../components/text-input.jsx';
import {TabApp , Item} from '../components/tab-app.jsx';

import SignInStyle from '../styles/app-profile.scss';

/****************************************************************************************/

class __Profile__ extends React.Component {
	constructor(props) {
		super(props);
	}

	onLogoutClick() {
		
	}

	render() {
		
		return (
			<div>
				<header>
					<Navbar >
						<NavBrand logoComponent={AppLogo_0} logoStyle={{height: '26px', width: '26px', padding: '0.4rem'}}/>
						<NavLink linkName="INICIO"/>
						<NavLink linkName="PERFIL"/>
						<NavLink linkName="DOCUMENTOS"/>
						<NavUser user={'Usuario Autenticado'} picture={'/images/profile-pic.jpg'}>
							<NavUserLink href="#home" text="Ver mi perfil"/>
							<NavUserLink href="#about" text="Configuración"/>
							<NavUserSeparator/>
							<NavUserActionButton text="Salir"  onClick={this.onLogoutClick.bind(this)}/>
						</NavUser>
					</Navbar>				
				</header>
				<main>
					
				<div className="container profile-container">
					<div className="row">
						<div className="col s12 m4 l3 profile-person">
							<div className=" profile-picture" >
								<img src={'/images/profile-pic.jpg'} alt=""/>
							</div>
						</div>
						<div className="col s12 m8 l9" style={{background:'green'}}>
							<h3>Juan Victor Bedoya</h3>
							<h5>Programador</h5>
						</div>
					</div>
					<div className="row">
						
							<TabApp items={['London','Paris','Tokio']}>
								<Item id="London"><h1>1</h1></Item>
								<Item id="Paris"><h1>2</h1></Item>
								<Item id="Tokio"><h1>3</h1></Item>
							</TabApp>
						
					</div>		
				</div>	
				</main>	
				<footer>
				</footer>
			</div>
		);
	}
}

export default withApollo(__Profile__);



