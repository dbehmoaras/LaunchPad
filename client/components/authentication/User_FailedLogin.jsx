import React, { Component } from 'react';
//default failed login page/ render this as a child fo the login component for now. eventually make this part of the app's state once you start adding login properties. add this to the react routers

class User_FailedLogin extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div>
        <h3>LOGIN FAILURE</h3>
        <h3>Would you like a consolation cake?</h3>
        <img src="https://cdn.drawception.com/images/panels/2016/6-17/DrZaywrNte-6.png"></img>
      </div>
    )
  }
}


export default User_FailedLogin
