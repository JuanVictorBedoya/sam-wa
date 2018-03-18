
/****************************************************************************************

	Copyright (c) 2018, SAM.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';
import gql from 'graphql-tag';
import { withApollo, graphql } from 'react-apollo';

import {Button} from '../components/button.jsx';
import {Navbar, NavLink, NavBrand, NavUser, NavUserLink, NavUserSeparator, NavUserActionButton} from '../components/navbar.jsx';
import {AppLogo_0} from '../components/app-logo.jsx';

/****************************************************************************************/

class __Home__ extends React.Component {
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
						<NavBrand logoComponent={AppLogo_0} logoStyle={{height: '25px', width: '25px', padding: '0.4rem'}}/>
						<NavLink linkName="INICIO"/>
						<NavLink linkName="PERFIL"/>
						<NavLink linkName="DOCUMENTOS"/>
						<NavUser user={'Juan Victor Bedoya'} picture={'/images/profile-pic.jpg'}>
							<NavUserLink href="#home" text="Ver mi perfil"/>
							<NavUserLink href="#about" text="Configuración"/>
							<NavUserSeparator/>
							<NavUserActionButton text="Salir"  onClick={this.onLogoutClick.bind(this)}/>
						</NavUser>
					</Navbar>
				</header>
				<main>
					<div>
						{this.props.demo ? this.props.demo.message : null}
					</div>
					<div className="row">
						<div className="col s6 l2 no-padding">
							<Button  style="default" text="style Default" />
						</div>
						<div className="col s6 l2 no-padding">
							<Button  style="blue" text="style Blue" />
						</div>
						<div className="col s6 l2 no-padding" >
							<Button  style="green" text="style Green" />
						</div>
						<div className="col s6 l2 no-padding" >
							<Button  style="red" text="style Red" />
						</div>
						<div className="col s6 l2 no-padding" >
							<Button  style="black" text="style Black" />
						</div>
						<div className="col s6 l2 no-padding" >
							<Button  text="Desabilitado" disabled />
						</div>
					</div>
				</main>
				<footer></footer>
			</div>
		);
	}
}

/****************************************************************************************/

export default withApollo(graphql(gql`
	query q {
		getDemo {
			message
		}
	}
	`, {
	props: ({ data: { loading, getDemo } }) => ({
		loading, demo: getDemo,
	}),
})(__Home__));
