
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

import SignInStyle from '../styles/app-signin.scss';

/****************************************************************************************/

class __Profile__ extends React.Component {
	constructor(props) {
		super(props);
	}

	onLogoutClick() {
		
	}

	render() {
		
		return (
			<div style={{minWidht:'50%'}}>
				<header >
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
					
				<div classname="row">
						<div classname="col l4" style={{background:'red'}}>
							<h1>xxxx</h1>
						</div>
						<div classname="col l8" style={{background:'green'}}>
							<h1>yyyy</h1>
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



