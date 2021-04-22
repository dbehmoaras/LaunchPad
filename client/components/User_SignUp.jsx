import React, { Component } from 'react';

//import serverRoute functionality
import serverUI from './../functions/serverUserInterface.js'

//import custom AUTHENTICATION functionality
import userAuth from './../functions/userAuthentication.js'


//refactor to shorthand if you end up not needing the full structure

const userSignUpInput = {
  email: '',
  password: '',
  lastName: '',
  firstName: '',
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
          <label>last name:</label>
          <input className="userInputField" type="text" onChange={(e) => onInputChange(e,'lastName')}></input>
          <label>first name:</label>
          <input className="userInputField" type="text" onChange={(e) => onInputChange(e,'firstName')}></input>
        </div>
        <button className="userAccessButton" onClick={(e) => submitSignUp(e)}>Sign Up</button>
      </div>
    )
  }
}

//handles signUp button data submission to the server. consider turning this into a post request
function submitSignUp(e, actionFunc = null){
  //implement passwod hashing here. should send a prehashed password to the server
  //gets hashes the password using bcrypt
  // userSignUpInput.password = passwordHash();
  console.log('submitSignUp: userSignUpInput', userSignUpInput)

  // signs up for the service. sends the user info with pre-hashed password to the server and adds it to the users table in postgreSQL
  serverUI.userAuthSignUp(userSignUpInput);

  if (!actionFunc) console.log('Sign Up clicked userSignUpInput. add action dispatch for post sign up execution');
  else console.log('submitSignUp actionFunc passed in');
}

//updates the userSignUpInput object according to the key being passed in (email, pasword, firstName, lastName etc)
function onInputChange (e, key){
  userSignUpInput[key] = e.target.value;
}

function passwordHash(){
  return userAuth.HASH(userSignUpInput.password,userAuth.SALT)
}

export default User_SignUp;