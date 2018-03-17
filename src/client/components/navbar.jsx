/****************************************************************************************
 

 
****************************************************************************************/

import React from 'react';

import NavbarStyle from '../styles/navbar.scss';

/****************************************************************************************/

class NavLink extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<li>
				<div className="nav-link">
					<a>{this.props.linkName}</a>
				</div>
			</li>
		);
	}
}

class NavBrand extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let LogoComponent = this.props.logoComponent;
		return (
			<li>
				<div className="nav-brand">
					<LogoComponent style={this.props.logoStyle}/>
				</div>
			</li>
		);
	}
}

class Navbar extends React.Component{
	constructor(props){
        super(props);
    }
    render() {
        return (
            <nav>
                <ul className="nav-wrapper">
                    {this.props.children}
                </ul>
            </nav>
        );
    }
}

export {Navbar, NavLink, NavBrand};