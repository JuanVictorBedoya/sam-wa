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

class NavUser extends React.Component {
	constructor(props) {
        super(props);
        
        this.status = {
			preventDefault: true
		};
    }

    componentDidMount() {
		let uopt = this.refs.userOpt.classList;
		window.addEventListener('click', ()=>{
			if (uopt.contains('nav-user-dropdown-show') && this.status.preventDefault) {
				uopt.remove('nav-user-dropdown-show');
			}
			this.status.preventDefault = true;
		});
	}

	onClickSummary() {
		this.status.preventDefault = false;
		this.refs.userOpt.classList.toggle('nav-user-dropdown-show');
    }
    
    render() {
        return(
            <li className="nav-right">
                <div className="nav-user">
                    <summary className="nav-user-wrapper" onClick={this.onClickSummary.bind(this)}>
                    <img src={this.props.picture} className="nav-user-img"/>
                        <span>
                            <svg version="1.0" viewBox="0 0 8 8">
                                <path d="M0 2l4 4 4-4H0z" ></path>
                            </svg>
                        </span>
                    </summary>
                    <div ref="userOpt" className="nav-user-dropdown arrow-up">
						<div className="dropdown-boxarrow-up"></div>
						<div className="nav-user-name">
							<div style={{padding: '0rem 0rem 0.3rem 0rem'}}>Registrado como</div>
                            <b>{this.props.user}</b>
						</div>
                        <hr className="nav-user-separator"/>
						{this.props.children}
					</div>
                </div>
            </li>
        )
    }
}

class NavUserLink extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<a className="nav-user-link">
				<span>{this.props.text}</span>
			</a>
		);
	}
}

class NavUserActionButton extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<a className="nav-user-link" onClick={this.props.onClick}>
				<span>{this.props.text}</span>
			</a>
		);
	}
}

class NavUserSeparator extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <hr className="nav-user-separator"/> 
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

export {Navbar, NavLink, NavBrand, NavUser, NavUserLink, NavUserSeparator, NavUserActionButton};