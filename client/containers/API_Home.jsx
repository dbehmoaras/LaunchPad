import React, { Component } from 'react';

// Build out back end API access from here

class API_USER extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div>
        <h1>Welcome to API_USER</h1>
        <h3>This is the parent component for all user child components</h3>
        <h3>User SignUp and Login</h3>
      </div>
    )
  }
}

export default API_USER;