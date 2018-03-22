
/****************************************************************************************

    


****************************************************************************************/

import React from 'react';

import TextInputStyle from '../styles/text-input.scss';

/****************************************************************************************/

class TextInput extends React.Component {
	constructor(props) {
		super(props);
	}

	getValue() {
		return this.refs.input.value;
	}

	onChange() {
		if(this.props.onChange) this.props.onChange(this.refs.input.value);
	}

	render() {
		return (
			<div className="input-group">
				{
					this.props.required ?
						<input ref="input" name={this.props.name} type={this.props.type} placeholder={this.props.placeholder} required
							onChange={this.onChange.bind(this)}/>:
						<input ref="input" name={this.props.name} type={this.props.type} placeholder={this.props.placeholder}
							onChange={this.onChange.bind(this)}/>
				}
				<label className="input-label" htmlFor={this.props.name}>{this.props.label}</label>
			</div>
		);
	}
}

TextInput.defaultProps = {
	type: 'text'
};

export { TextInput };
