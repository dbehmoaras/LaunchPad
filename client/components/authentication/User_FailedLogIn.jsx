import React, { Component } from 'react';
//default failed login page/ render this as a child fo the login component for now. eventually make this part of the app's state once you start adding login properties. add this to the react routers

class User_FailedLogin extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div>
        <h3>LOGIN SUCCESS, HERE'S THE SECRET:</h3>
        <h1>THE CAKE IS A LIE</h1>
        <img src="https://media4.s-nbcnews.com/j/streams/2013/April/130423/6C7066768-portalcake.fit-560w.jpg"></img>
      </div>
    )
  }
}


export default User_FailedLogIn
