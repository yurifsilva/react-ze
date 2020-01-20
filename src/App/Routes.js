import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../Pages/HomePage';
import React from 'react';

export default function Routes() {
	return (
		<BrowserRouter basename="/react-ze">
			<Switch>
				<Route exact path="/" component={HomePage} />
			</Switch>
		</BrowserRouter>
	);
}
