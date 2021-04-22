import React, { Component } from 'react';
//default failed login page/ render this as a child fo the login component for now. eventually make this part of the app's state once you start adding login properties. add this to the react routers

class User_FailedLogin extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div>
        <h3>LOGIN FAILED, unable to authenticate</h3>
      </div>
    )
  }
}


export default User_FailedLogIn
