import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';


//import necessary route constants
import * as clientRoutes from './../constants/clientRouteStrings';

//import child classes to have them rendered through the router
import User_SignUp from './../components/authentication/User_SignUp.jsx';
import User_LogIn from './../components/authentication/User_LogIn.jsx'




// Build out back end API access from here



const USER_NAVIGATION_LINKS = () => (
	<React.Fragment>
		<NavLink to = {clientRoutes.USER_SignUp_Route}><button>Sign Up</button></NavLink>
		<NavLink to = {clientRoutes.USER_LogIn_Route}><button>Log In</button></NavLink>

		{/* ADD MORE NAV LINK BUTTONS HERE*/}
	</React.Fragment>
)

//add more routes here
const USER_ROUTE_LINKS = () => (
	<React.Fragment>
		<Route exact path={clientRoutes.USER_SignUp_Route} children={({match}) => match && <User_SignUp/>}/>
		<Route exact path={clientRoutes.USER_LogIn_Route} children={({match}) => match && <User_LogIn/>}/>

		{/* ADD MORE ROUTES HERE */}
	</React.Fragment>
)


class API_User extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div>
        <h1>Welcome to API_USER</h1>
        <h3>This is the parent component for all user child components</h3>
        <h3>User SignUp and Login</h3>
        <div>___________________________________________________</div>
        <USER_NAVIGATION_LINKS/>
        <USER_ROUTE_LINKS/>
      </div>
    )
  }
}

export default API_User;