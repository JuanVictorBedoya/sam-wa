
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

class __SignIn__ extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		
		return (
			<div>
				<header>				
				</header>
				<main>
				<div ref="signin" className="signin-page">
						<div className="signin-container">
							<div className='signin-container-header'>
								<AppLogo_0 className="sombra" id="app_logo_0" style={{height: '5rem', width: '5rem', margin: '0 auto', display: 'block'}}/>	
							</div>
							<div className="row signin-container-body">
								<div className="col s12 ">
									<form >
										<div>
											<h4 style={{marginBottom:'0.9rem',marginTop:'0rem', textAlign:'center'}}>Iniciar Sesión</h4>
										</div>
										<div>
										<TextInput ref="email" name="email" label="Nombre de Usuario o Email" placeholder="usuario / email" type="email" required={true}/>
										<TextInput ref="passw" name="passw" label="Contraseña" placeholder="Contraseña" type="password" required={true}/>
										</div>
										<div>
											<Button  style="black" text="Iniciar Sesión" type="submit" />
										</div>
									</form>
								</div>
							</div>
							<div className="row signin-container-body">
								<div>
									<p style={{margin:'0rem 1rem 1rem 1rem',fontSize: '13px', textAlign:'center'}}>Nuevo? <a href='#'>Registrate Aquí</a></p>
								</div>
							</div>
							<div>
								<ul style={{fontSize:'12px', padding:'0rem', marginTop:'2.5rem', textAlign: 'center'}}>
									<li style={{ display:'inline', margin:'0rem 1.3rem 0rem 0rem'}}><a href='#'>Terminos</a></li>
									<li style={{ display:'inline', margin:'0rem 1.3rem 0rem 0rem'}}><a href='#'>Privacidad</a></li>
									<li style={{ display:'inline', margin:'0rem 1.3rem 0rem 0rem'}}><a href='#'>Seguridad</a></li>
									<li style={{ display:'inline', margin:'0rem 1.3rem 0rem 0rem'}}><a href='#'>Contactanos</a></li>
								</ul>
							</div>	
						</div>
					</div>
				</main>
				<footer></footer>
			</div>
		);
	}
}

/****************************************************************************************/

export default withApollo(__SignIn__);
