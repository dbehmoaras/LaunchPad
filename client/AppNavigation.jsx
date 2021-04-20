import React, { Component } from 'react';
import { Route, Switch, NavLink, BrowserRouter, withRouter, Redirect } from 'react-router-dom'

//import necessary route constants
import * as routes from './constants/routeStrings'

//import necessary components
import API_User from './containers/API_User.jsx';


//add more links here
const NavigationLinks = () => (
	<React.Fragment>
		<NavLink to = '/'>
			<button >Home</button>
		</NavLink>

		<NavLink to = {routes.API_User_Route}>
			<button >Go to User API</button>
		</NavLink>

		{/* ADD MORE NAV LINK BUTTONS HERE*/}
	</React.Fragment>
)

//add more routes here
const RouteLinks = () => (
	<React.Fragment>
		<Route exact path='/' render ={() => <h3>Welcome to Launchpad</h3>}/>
		<Route path={routes.API_User_Route} children={({match}) => match && <API_User/>}/>

		{/* ADD MORE ROUTES HERE */}
	</React.Fragment>
)


class AppNavigation extends Component {
	constructor(props) {
		super(props)
	}

	render(){
		// console.log(this)
		return (
			<div>
				<h1>{'Rendered App Component'}</h1>
				<h3>{'Navigation below'}</h3>
				<div className = "navigationContainer">
					{/* render the Navigation Component inside of the navigation container div */}
					<NavigationLinks/>
					<div>________________________________________________</div>
					<RouteLinks/>
				</div>
			</div>
		)
	}
}

export default AppNavigation;