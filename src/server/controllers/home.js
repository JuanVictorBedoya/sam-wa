
/****************************************************************************************

	Copyright (c) 2018, SAM.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';

import HomeView from '../views/home.jsx';

/****************************************************************************************/

class HomeController {
	constructor() {
	}

	index(req, res) {
		res.render(<HomeView title={req.config.companyName}/>);
	}
}

/****************************************************************************************/

export default HomeController;
