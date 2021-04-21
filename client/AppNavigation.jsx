import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'

//import necessary route constants
import * as routes from './constants/routeStrings'

//import necessary components
import API_User from './containers/API_User.jsx';


//add more links here
const APP_NAVIGATION_LINKS = () => (
	<React.Fragment>
		<NavLink to = {routes.HOME_Route}><button >Home</button></NavLink>
		<NavLink to = {routes.API_User_Route}><button >Go to User API</button></NavLink>

		{/* ADD MORE NAV LINK BUTTONS HERE*/}
	</React.Fragment>
)

//add more routes here
const APP_ROUTE_LINKS = () => (
	<React.Fragment>
		<Route exact path={routes.HOME_Route} render ={() => <h3>Welcome to Launchpad</h3>}/>
		<Route path={routes.API_User_Route} children={({match}) => match && <API_User/>}/>

		{/* ADD MORE ROUTES HERE */}
	</React.Fragment>
)


class AppNavigation extends Component {
	constructor(props) {
		super(props)
		//bring user state up to this level
	}

	render(){
		// console.log(this)
		return (
			<div>
				<h3>{'Navigation Bar:'}</h3>
				<div className = "navigationContainer">
					{/* render the Navigation Component inside of the navigation container div */}
					<APP_NAVIGATION_LINKS/>
					<div>________________________________________________</div>
					<APP_ROUTE_LINKS/>
				</div>
			</div>
		)
	}
}

export default AppNavigation;