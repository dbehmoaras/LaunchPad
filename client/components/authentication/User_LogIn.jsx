import React, { Component } from 'react';

//import serverRoute functionality
import serverUI from './../../functions/serverUserInterface.js'

//import custom AUTHENTICATION functionality
import userAuth from './../../functions/userAuthentication.js'

//refactor to shorthand if you end up not needing the full structure

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
    console.log('submitLogIn serverReponse:',serverResponse.data);

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
        <button className="userAccessButton" onClick={(e) => submitLogIn(e)}>Log In</button>
      </div>

    )
  }
}

//handles signUp button data submission to the server. consider turning this into a post request
async function submitLogIn(e, actionFunc = null){


  const serverResponse = await serverUI.userAuthLogIn(userLogInInput);
  // console.log('submitLogIn userLogInInput:', userLogInInput)
  console.log('submitLogIn serverReponse:',serverResponse.data);


}

//updates the userSignUpInput object according to the key being passed in (email, pasword, firstName, lastName etc)
function onInputChange (e, key){
  userLogInInput[key] = e.target.value;
}


function compareHash () {
  return userAuth.CHECK(userLogInInput.password, userAuth.SALT)
}


export default User_LogIn;