import React, { Component } from 'react';

//import serverRoute functionality
import serverUI from './../../functions/serverUserInterface.js'


import User_Secret from './User_Secret.jsx';
import User_FailedLogin from './User_FailedLogin.jsx';


const userLogInInput = {
  email: '',
  password: '',
}

class User_LogIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      logIn: undefined,
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
    let secret = null;
    if (this.state.logIn === true) secret = <User_Secret/>;
    else if (this.state.logIn === false) secret = <User_FailedLogin/>;
    return(
      <div className="userAccessContainer">
        <div className="userInputFieldContainer">
          <label>email:</label>
          <input className="userInputField" type="text" onChange={(e) => onInputChange(e,'email')}></input>
          <label>password:</label>
          <input className="userInputField" type="text" onChange={(e) => onInputChange(e,'password')}></input>
        </div>
        <button className="userAccessButton" onClick={(e) => this.submitLogIn(e)}>Log In</button>
        {secret}
      </div>
    )
  }
}


//updates the userSignUpInput object according to the key being passed in (email, pasword, firstName, lastName etc)
function onInputChange (e, key){
  userLogInInput[key] = e.target.value;
}


export default User_LogIn;