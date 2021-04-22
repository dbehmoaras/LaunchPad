import React, { Component } from 'react';

//import serverRoute functionality
import serverUI from './../../functions/serverUserInterface.js'


import User_Secret from './User_Secret.jsx';

const userLogInInput = {
  email: '',
  password: '',
}

class User_LogIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      logIn: false,
    }
    this.submitLogIn = this.submitLogIn.bind(this);
  }

  async submitLogIn(e, actionFunc = null){
    const serverResponse = await serverUI.userAuthLogIn(userLogInInput);
    // console.log('submitLogIn userLogInInput:', userLogInInput)
    console.log('submitLogIn serverReponse what:',serverResponse.data.logIn);
    this.setState({
      logIn: serverResponse.data.logIn,
    })
  }

  render(){
    return(
      <div className="userAccessContainer">
        <div className="userInputFieldContainer">
          <label>email:</label>
          <input className="userInputField" type="text" onChange={(e) => onInputChange(e,'email')}></input>
          <label>password:</label>
          <input className="userInputField" type="text" onChange={(e) => onInputChange(e,'password')}></input>
        </div>
        <button className="userAccessButton" onClick={(e) => this.submitLogIn(e)}>Log In</button>
        {this.state.logIn ? <User_Secret/> : null}
      </div>

    )
  }
}


//updates the userSignUpInput object according to the key being passed in (email, pasword, firstName, lastName etc)
function onInputChange (e, key){
  userLogInInput[key] = e.target.value;
}


export default User_LogIn;