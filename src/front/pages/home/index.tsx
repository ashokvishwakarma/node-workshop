import "./style";
import { h, Component } from 'preact';

import { connect } from 'redux-zero/preact';

import * as actions from './actions';

class Home extends Component {
	componentWillMount() {
		const props: any = this.props;
		props.load();
	}

	render() {
		return (
			<div className="home">
				<h1>Home</h1>
				<p>This is the Home component.</p>
			</div>
		);
	}
}

export default connect(actions, actions)(Home);
