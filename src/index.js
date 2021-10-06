import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {
	Header,
	Footer,
	Routines,git pull
	MyRoutines,
	Activities
} from './components';

const App = () => {
	const baseURL = 'https://fitnesstrac-kr.herokuapp.com/api/';
	const [ isAuthenticated, setIsAuthenticated ] = useState(true);



	return <Router>
		<Header />
			<main>
				<Switch>
					<Route exact path="/">
						<h1>Home</h1>
						<div className="logReg">
							{ isAuthenticated ? "Authenticated" : "Not Authenitcated"}
						</div>
					</Route>
					<Route path="/routines">
						<Routines baseURL={baseURL} />
					</Route>
					<Route path="/myroutines">
						<MyRoutines baseURL={baseURL} />
					</Route>
					<Route path="/activities">
						<Activities baseURL={baseURL} />
					</Route>
				</Switch>
			</main>
		<Footer />
	</Router>
};

ReactDOM.render(<App />, document.getElementById('app'));