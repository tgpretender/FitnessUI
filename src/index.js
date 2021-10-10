import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {
	Header,
	Footer,
	Routines,
	Register,
	Login,
	MyRoutines,
	Activities,
	UserRoutines,
	ActivityRoutines
} from './components';

const App = () => {
	const baseURL = 'https://fitnesstrac-kr.herokuapp.com/api/';
	const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("isLoggedIn"));
	const [userToken, setUserToken] = useState(localStorage.getItem("token"));
    const [usernameString, setUsernameString] = useState(localStorage.getItem("username"));
	const [showLog, setShowLog] = useState(true);
    const [allActivities, setAllActivities] = useState([]);

	return <Router>
		<Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUserToken={setUserToken} setUsernameString={setUsernameString} />
			<main>
				<Switch>
					<Route exact path="/">
						<div className="logReg">
							<div className="greeting">
								<h1>Welcome 
									{ !isAuthenticated ? ' ' : ' back ' }
									to FiTNESS TRAC.Kr
									{ !isAuthenticated ? '!' : `, ${usernameString}!` }
								</h1>
								<h2>Get swoll like Tracker the Fitness Cat</h2>
								<ul>
									<li>See routines from other members on the Routines tab</li>
									<li>See a wide range of member submitted activities on the Activity tab</li>
									{ !isAuthenticated ? null : <li>Manage your routines in the My Routines tab</li> }
								</ul>
								<div className="disclaimer">
									<label>DISCLAIMER:</label> FiTNESS TRAC.Kr is not liable for injuries sustained while performing member submitted routines or activities. Do not run from a bear. Use bear spray.
								</div>
							</div>
							{ isAuthenticated ? null :
							<div id="logReg">
								{ showLog ?
								<div>
									<Login
										baseURL={baseURL} 
										setUsernameString={setUsernameString} 
										setIsAuthenticated={setIsAuthenticated} 
										setUserToken={setUserToken}
									/>
									<br />
									<p>Not a member?</p>
                					<br />
                					<button className="regButton" onClick={() => setShowLog(false)}>Register</button>
								</div>
									:
									<div>
									<Register 
										baseURL={baseURL} 
										setUsernameString={setUsernameString} 
										setIsAuthenticated={setIsAuthenticated} 
										setUserToken={setUserToken}
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
					<Route path="/routines">
						<Routines baseURL={baseURL} userToken={userToken}/>
					</Route>
					<Route path="/myroutines">
						<MyRoutines baseURL={baseURL} usernameString={usernameString} userToken={userToken}/>
					</Route>
					<Route path="/activities">
						<Activities baseURL={baseURL} userToken={userToken} isAuthenticated={isAuthenticated} />
					</Route>
					<Route path="/userroutines/:creatorName">
						<UserRoutines />
					</Route>
					<Route path="/activityroutines/:activityId">
						<ActivityRoutines />
					</Route>
					<Route>
						<h1>404 Page Not Found</h1>
						<p>You have stumbled upon a page that doesn't exist! Tracker must have pummeled it out of existence, that fiesty cat.</p>
					</Route>
				</Switch>
			</main>
		<Footer />
	</Router>
};

ReactDOM.render(<App />, document.getElementById('app'));