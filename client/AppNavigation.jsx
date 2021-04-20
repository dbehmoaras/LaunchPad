import React, { Component } from 'react';
import { Route, Switch, NavLink, BrowserRouter, withRouter, Redirect } from 'react-router-dom'

//import necessary components
import API_Home from './containers/API_Home.jsx';


const NavigationLinks = () => (
	<React.Fragment>
		<NavLink to = '/'>
			<button >Home</button>
		</NavLink>

		<NavLink to = '/API_User'>
			<button >Go to User API</button>
		</NavLink>

		{/* insert more navigation links here */}
	</React.Fragment>
)

//need to figure out how to pass
const RouteLinks = () => (
	<React.fragment>
		<Route exact path='/' render ={() => <h3>Welcome to Launchpad</h3>}/>
		<Route path='/API_Home' children={({match}) => match && <API_Home/>}/>
	</React.fragment>
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
					{/* <RouteLinks/> */}
					{/* <Navigation /> */}
				</div>
				<Route exact path='/' render ={() => <h3>Welcome to Launchpad</h3>}/>
				<Route path='/API_USER' children={({match}) => match && <API_USER/>}/>
			</div>
		)
	}
}

export default AppNavigation;