import "./style";
import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

export default class Header extends Component {
	render() {
		return (
			<header className="header">
				<h1>Preact App</h1>
				<nav>
					<Link activeClassName="active" href="/">Home</Link>
					<Link activeClassName="active" href="/profile">Me</Link>
					<Link activeClassName="active" href="/profile/john">John</Link>
				</nav>
			</header>
		);
	}
}
