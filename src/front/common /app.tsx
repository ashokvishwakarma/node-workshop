import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Home from '../pages/home';
import Profile from '../pages/profile';
// import Home from 'async!./home';
// import Profile from 'async!./profile';

export default class App extends Component {
	currentUrl: string;
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Profile path="/profile/" />
					<Profile path="/profile/:user" />
				</Router>
			</div>
		);
	}
}
