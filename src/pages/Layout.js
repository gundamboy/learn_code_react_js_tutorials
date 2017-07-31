import React from 'react';
import { Route, Link, Switch } from "react-router-dom";
import Footer from '../components/layout/Footer';
import Nav from '../components/layout/Nav';
import Favorites from "../pages/Favorites";
import Settings from "../pages/Settings";
import Todos from "../pages/Todos";

export default class Layout extends React.Component {
	render(ReactElement, DOMElement, callback) {
		const { location } = this.props;
		const containerStyle = {
			marginTop: "60px"
		};

		return (
			<div>
				<Nav  location={location} />
			  	
			  	<div className="contaier" style={containerStyle}>
			  		<div>
			  			<Route path='/' component={Todos} />
						<Route path="/favorites" name="favorites" component={Favorites} />
			  			<Route path="/settings" name="settings" component={Settings} />
			  		</div>
			  		<div className="row">
			  			<div className="col-lg-12">
							{this.props.children}
			  			</div>
			  		</div>
			  		{/* <Footer/> */}
			  	</div>
		  	</div>
		);
	}
} 