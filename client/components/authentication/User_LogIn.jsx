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

  // get the hash key from the server

  const hashData = await serverUI.userAuthLogIn(userLogInInput);
  console.log('submitLogIn userLogInInput:', userLogInInput)
  console.log('submitLogIn hashData:',hashData);


  if (!actionFunc) console.log('LogIn clicked userLogInInput:',userLogInInput);
  else console.log('submitLogin else fired');
}

//updates the userSignUpInput object according to the key being passed in (email, pasword, firstName, lastName etc)
function onInputChange (e, key){
  userLogInInput[key] = e.target.value;
}


function compareHash () {
  return userAuth.CHECK(userLogInInput.password, userAuth.SALT)
}


export default User_LogIn;