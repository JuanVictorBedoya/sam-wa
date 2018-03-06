
/****************************************************************************************

	Copyright (c) 2018, SAM.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';
import ReactDOM from'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import {ApolloProvider} from 'react-apollo';
import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {setContext} from 'apollo-link-context';
import {InMemoryCache} from 'apollo-cache-inmemory';

import Home from '../views/home.jsx';

import config from './config';

import AppStyles from '../styles/app.scss';

/****************************************************************************************/

class Main extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (<div>{this.props.children}</div>);
	}
}

/****************************************************************************************/

class App {
	constructor() {
		document.addEventListener('DOMContentLoaded', this.onDOMContentLoaded.bind(this));

		let authLink = setContext((_, { headers }) => {
			const token = localStorage.getItem('authorization');
			return {
				headers: {
					headers,
					authorization: token,
				}
			};
		});

		this.client = new ApolloClient({
			link: authLink.concat(new HttpLink({uri: config.GRAPHQL_API_URL})),
			cache: new InMemoryCache(),
		});
	}

	onDOMContentLoaded() {
		this._mainSection = window.document.getElementById('app-main');

		this.render();
	}

	render() {
		ReactDOM.render(
			<ApolloProvider client={this.client}>
				<BrowserRouter>
					<Main>
						<Route exact={true} path="/" component={Home}/>
					</Main>
				</BrowserRouter>
			</ApolloProvider>,
			this._mainSection);
	}

}

/****************************************************************************************/

new App();
