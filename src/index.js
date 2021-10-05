import React from 'react';
import ReactDOM from 'react-dom';

import {
	Header,
	Footer
} from './components';

const App = () => {
	return <div>
		<Header />
		<main>
			Hello
		</main>
		<Footer />
	</div>
};

ReactDOM.render(<App />, document.getElementById('app'));