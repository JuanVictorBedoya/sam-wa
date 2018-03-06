
/****************************************************************************************

	Copyright (c) 2018, SAM.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';

/****************************************************************************************/

class E404View extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<html>
				<head>
					<title>{this.props.title}</title>
					<meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=1, maximum-scale=1"/>
					
					<link rel="shortcut icon" href="/icons/favicon.ico"/>
					<link rel="stylesheet" type="text/css" href="/css/sam.min.css"/>
				</head>
				<body>
					<div className="container">
						<div className="row" style={{margin: '2rem 0', textAlign: 'center'}}>
						</div>
						<div className="row" style={{marginBottom: '3rem'}}>
							<div className="col s12 m9">
								<h3 style={{marginTop: '2rem'}}>
									<b>Error 404 - Página no encontrada</b>
								</h3>
							</div>
						</div>
						<div className="row">
							<h5><b>Esta no es la página web que está buscando</b></h5>
							<h6>¡Lo sentimos!, La página que buscas no se ha encontrado en este servidor. Puede deberse a que la dirección se ha escrito incorrectamente o a que la página ha sido cancelada. Revisa la dirección URL e inténtalo de nuevo.</h6>
						</div>
					</div>
				</body>
			</html>
		);
	}
}

/****************************************************************************************/

export default E404View;
