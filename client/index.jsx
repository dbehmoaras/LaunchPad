import React from 'react';
import { render } from 'react-dom';
import AppNavigation from './AppNavigation.jsx';
import { BrowserRouter } from 'react-router-dom';

import styles from './scss/styleBundle.scss';

render(
	<BrowserRouter>
		<AppNavigation />
	</BrowserRouter>,
	document.getElementById('root')
)