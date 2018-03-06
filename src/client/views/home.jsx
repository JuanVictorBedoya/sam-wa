
/****************************************************************************************

	Copyright (c) 2018, SAM.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';
import gql from 'graphql-tag';
import { withApollo, graphql } from 'react-apollo';

/****************************************************************************************/

class __Home__ extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				{this.props.demo ? this.props.demo.message : null}
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
