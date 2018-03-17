/****************************************************************************************
 

 
****************************************************************************************/

import React from 'react';

import NavbarStyle from '../styles/button.scss';

/****************************************************************************************/

class Button extends React.Component {
    constructor(props) {
        super(props)
    };
    render() {
        return this.props.disabled ?
        (
            <button className="btn disabled" type={this.props.type} disabled>
                {this.props.text}
            </button>
        ):
        (
            <button className={ "btn " + this.props.style } type={this.props.type} onClick={this.props.onClick}>
                {this.props.text}
            </button>
        );
    }
}

Button.defaultProps = {
	type: 'button'
};

export { Button };