import React from 'react';
import { Route, NavLink, Link, Switch } from "react-router-dom";
import Footer from '../components/layout/Footer';
import Nav from '../components/layout/Nav';
import Archives from "../pages/Archives";
import Featured from "../pages/Featured";
import Settings from "../pages/Settings";

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
			  			<Switch>
			  				<Route path="/archives/:article" name="archives" component={Archives} />
			  				<Route path='/archives' component={Archives} />
			  			</Switch>
						<Route path="/" name="featured" component={Featured} />
			  			<Route path="/settings" name="settings" component={Settings} />
			  		</div>
			  		<div className="row">
			  			<div className="col-lg-12">
							<h1>KillerNews.Net</h1>
							{this.props.children}
			  			</div>
			  		</div>
			  		<Footer/>
			  	</div>
		  	</div>
		);
	}
} 