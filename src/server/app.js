
/****************************************************************************************

	Copyright (c) 2018, SAM.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import http from 'http';
import path from 'path';

import express from 'express';
import jsonfile from 'jsonfile';
import {renderToString} from 'react-dom/server';

import Routes from './routes.js';

import ErrorsController from './controllers/errors';
import HomeController from './controllers/home';

/****************************************************************************************/

class App {
	constructor() {
		this.config = jsonfile.readFileSync(path.join(__dirname, 'config.json'));

		this.express = express();
		this.express.use(express.static(path.join(__dirname, 'assets')));
		this.express.use(this.onRequest.bind(this));
		
		this.init();
	}

	async init() {
		this.controller = {
			error: new ErrorsController,
			home: new HomeController
		};

		let WebRoutes = new Routes(this);

		this.express.use('/', WebRoutes.router);

		this.server = http.createServer(this.express);
		this.server.listen(this.config.port, this.onStart.bind(this));
	}

	onStart() {
		console.log('El servidor se ha iniciado por el puerto:', this.config.port);
	}

	onRequest(req, res, next) {

		req.config = this.config;

		res.render = function(Component) {
			return res.send(renderToString(Component));
		};

		next();
	}
}

/****************************************************************************************/

export default App;
