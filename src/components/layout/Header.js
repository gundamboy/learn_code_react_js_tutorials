import React from 'react';
import logo from '../../images/logo.svg';

export default class Header extends React.Component {
	handleChange(e) {
		const title = e.target.value;
		this.props.changeTitle(title);
	}

	render(ReactElement, DOMElement, callback) {
		return (
			<div className="App-header">
			  <h2>{this.props.title}</h2>
			  <input value={this.props.title} onChange={this.handleChange.bind(this)} />
			</div>
		);
	}
}