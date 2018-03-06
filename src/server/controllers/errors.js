
/****************************************************************************************

	Copyright (c) 2018, SAM.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';

import E404View from '../views/404.jsx';

/****************************************************************************************/

class ErrorsController {
	constructor() {
	}

	notFound(req, res, next) {
		res.status(404).render(<E404View title={req.config.companyName}/>);
	}
}

/****************************************************************************************/

export default ErrorsController;
