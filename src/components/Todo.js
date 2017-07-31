import React from "react";


export default class Todo extends React.Component {
	constructor(prpos) {
		super();
	}

	render() {
		const { complete, edit, text } = this.props;
		const icon = complete ? "\u2714" : "\u2716";
		const containerStyle = {
			marginRight: "5px"
		};

		if (edit) {
			return (
				<li><inpout value={text} focus="focused" /></li>
			);
		}

		return (
			<li>
				<span style={containerStyle}>{icon}</span>
				<span>{text}</span>
			</li>
		);
	}
}