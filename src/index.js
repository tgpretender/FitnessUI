import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {
	Header,
	Footer,
	Routines,
	Register,
	Login,
	Profile,
	Activities
} from './components';

const App = () => {
	const baseURL = 'https://fitnesstrac-kr.herokuapp.com/api/';
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [userToken, setUserToken] = useState('')
    const [usernameString, setUsernameString] = useState('');
    const [passwordString, setPasswordString] = useState('');
	const [showLog, setShowLog] = useState(true)

	return <Router>
		<Header isAuthenticated={isAuthenticated} />
			<main>
				<Switch>
					<Route exact path="/">
						<div className="logReg">
							{ isAuthenticated ? "Welcome to Fitness Trackr!" : 
							
							<div id="logReg">
								{ showLog ?
								<div>
									<Login 
									/*
										isAuthenticated={isAuthenticated}
										setIsAuthenticated={setIsAuthenticated}
										userToken={userToken}
										setUserToken={setUserToken}
									*/
										usernameString={usernameString}
										setUsernameString={setUsernameString}
										passwordString={passwordString}
										setPasswordString={setPasswordString}

									/>
									<br />
									<p>Not a member?</p>
                					<br />
                					<button className="regButton" onClick={() => setShowLog(false)}>Register</button>
								</div>
									:
									<div>
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
									<br />
									<p>Already a member?</p>
									<br />
									<button className="logButton" onClick={() => setShowLog(true)}>Login</button>
									</div>
							}
							</div>
							}
						</div>
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
					<Route path="/routines">
						<Routines baseURL={baseURL} />
					</Route>
					<Route path="/profile">
						<Profile baseURL={baseURL} usernameString={usernameString} userToken={userToken}/>
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