import "./style";
import { h, Component } from 'preact';

export default class Profile extends Component {

	state = {
		time: Date.now(),
		count: 10
	};

	timer: NodeJS.Timeout;

	// gets called when this route is navigated to
	componentDidMount() {
		// start a timer for the clock:
		this.timer = setInterval(this.updateTime, 1000);
	}

	// gets called just before navigating away from the route
	componentWillUnmount() {
		clearInterval(this.timer);
	}

	// update the current time
	updateTime = () => {
		this.setState({ time: Date.now() });
	};

	increment = () => {
		this.setState({ count: this.state.count+1 });
	};

	// Note: `user` comes from the URL, courtesy of our router
	render(props) {
		return (
			<div className="profile">
				<h1>Profile: {props.user}</h1>
				<p>This is the user profile for a user named { props.user }.</p>

				<div>Current time: {new Date(props.time).toLocaleString()}</div>

				<p>
					<button onClick={this.increment}>Click Me</button>
					{' '}
					Clicked {props.count} times.
				</p>
			</div>
		);
	}
}
