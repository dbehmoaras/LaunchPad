import React, { Component } from 'react';

//import serverRoute functionality
import serverUI from './../functions/serverUserInterface.js'

//import custom AUTHENTICATION functionality
import userAuth from './../functions/userAuthentication.js'


//refactor to shorthand if you end up not needing the full structure

const userSignUpInput = {
  email: '',
  password: '',
  firstName: '',
  lastName: ''
  // add more key value pairs here. make sure to add input fields or other logic as needed
}

class User_SignUp extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    console.log(userAuth)
    return(
      <div className = "userAccessContainer">
        <div className="userInputFieldContainer">
          <label>email:</label>
          <input className="userInputField" type="text" onChange={(e) => onInputChange(e,'email')}></input>
          <label>password:</label>
          <input className="userInputField" type="text" onChange={(e) => onInputChange(e,'password')}></input>
          <label>first name:</label>
          <input className="userInputField" type="text" onChange={(e) => onInputChange(e,'firstName')}></input>
          <label>password:</label>
          <input className="userInputField" type="text" onChange={(e) => onInputChange(e,'lastName')}></input>
        </div>
        <button className="userAccessButton" onClick={(e) => submitSignUp(e)}>Sign Up</button>
      </div>
    )
  }
}

//handles signUp button data submission to the server. consider turning this into a post request
function submitSignUp(e, actionFunc = null){
  //implement passwod hashing here. should send a prehashed password to the server
  userSignUpInput.password = secureSignUp();

  serverUI.serverTest();

  if (!actionFunc) console.log('Sign Up clicked userSignUpInput:',userSignUpInput);
  else console.log('submitSignUp else fired');
}

//updates the userSignUpInput object according to the key being passed in (email, pasword, firstName, lastName etc)
function onInputChange (e, key){
  userSignUpInput[key] = e.target.value;
}

function secureSignUp(){
  return userAuth.HASH(userSignUpInput.password,userAuth.SALT)
}

export default User_SignUp;