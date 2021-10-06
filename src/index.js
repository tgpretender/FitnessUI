import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {
	Header,
	Footer,
	Routines,
	Register,
	Login
} from './components';

const App = () => {
	const baseURL = 'https://fitnesstrac-kr.herokuapp.com/api/';
	const [ isAuthenticated, setIsAuthenticated ] = useState(true);
	const [userToken, setUserToken] = useState('')
    const [usernameString, setUsernameString] = useState('');
    const [passwordString, setPasswordString] = useState('');


	return <Router>
	<Header />
	<main>
		<Switch>
			<Route exact path="/">
				Home
			</Route>
			<Route path="/routines">
				<Routines baseURL={baseURL} />				
			</Route>
			<Route path="/register">
				<Register 
					isAuthenticated={isAuthenticated}
					setIsAuthenticated={setIsAuthenticated}
					userToken={userToken}
					setUserToken={setUserToken}
					usernameString={usernameString}
					setUsernameString={setUsernameString}
					passwordString={passwordString}
					setPasswordString={setPasswordString}
				/>
			</Route>
		
			<Route path="/login">
				<Login 

					usernameString={usernameString}
					setUsernameString={setUsernameString}
					passwordString={passwordString}
					setPasswordString={setPasswordString}
				/>
			</Route>
		</Switch>
	</main>
	<Footer />
</Router>
};

ReactDOM.render(<App />, document.getElementById('app'));