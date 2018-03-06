
/****************************************************************************************

	Copyright (c) 2018, SAM.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import express from 'express';

/****************************************************************************************/

class Routes {
	constructor(app) {
		this.router = express.Router();

		let home = app.controller.home,
			error = app.controller.error;

		this.router.get('/', home.index.bind(home));

		this.router.use(error.notFound.bind(error));
	}
}

/****************************************************************************************/

export default Routes;
