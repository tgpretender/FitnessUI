import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {
	Header,
	Footer,
	Routines
} from './components';

const App = () => {


	
	return <Router>
	<Header />
	<main>
		<Switch>
			<Route exact path="/">
				Home
			</Route>
			<Route path="/routines">
				<Routines />
			</Route>
		</Switch>
	</main>
	<Footer />
</Router>
};

ReactDOM.render(<App />, document.getElementById('app'));