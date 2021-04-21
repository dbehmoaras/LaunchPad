import React, { Component } from 'react';

//import custom AUTHENTICATION functionality

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
  if (!actionFunc) console.log('Sign Up clicked userSignUpInput:',userSignUpInput);
  else console.log('submitSignUp else fired');
}

//updates the userSignUpInput object according to the key being passed in (email, pasword, firstName, lastName etc)
function onInputChange (e, key){
  userSignUpInput[key] = e.target.value;
}

export default User_SignUp;