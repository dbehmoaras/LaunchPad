import * as serverRoutes from './../constants/serverRouteStrings.js';

// require in axios from 'axios';
const axios = require('axios');
//import the server routes
// import * as serverRoutes from './../constants/serverRouteStrings.js'
// console.log(serverRoutes.SRV_LEADERS_TEST)
//server user functions: sign up, login, and get secret

//dubious return statements in the axios funcs

//function tests access to the server. should return a simple object
const serverTest = () => {
  console.log('******** FRONT END SERVER TEST FIRED ********');
  axios.get(serverRoutes.SRV_Test)
    .then((data) => {
      console.log(data);
      // return;
    })
    .catch((err) => {
      console.log(err);
      // return;
    });
  console.log('******** FRONT END SERVER TEST ENDED ********');
}

const userAuthSignUp = (signUpInput) => {
  console.log('******** FRONT END userAuthSignUp FIRED ********');
  axios.post(serverRoutes.SRV_UserAuth_SignUp, signUpInput)
    .then(() => {
      //this is where you want to send back the cookie and/or secret
      //need more middleware on the server
      console.log('userAuthSignUp post successful. replace this log with cookie');
      // return;
    })
    .catch((err) =>{
      console.log(err);
      // return;
    });
  console.log('******** FRONT END userAuthSignUp ENDED ********');
}


const userAuthLogIn = (logInInput) => {
  console.log('******** FRONT END userAuthLogIn FIRED ********');

  let serverHashData;

  axios.post(serverRoutes.SRV_UserAuth_LogIn,logInInput)
    .then((data) => {
      console.log('userAuthLogin data:',data);
      serverHashData = data;
      return;
    })
    .catch((err) =>{
      console.log(err);
      // return;
    });

  console.log('serverHashData',serverHashData)
  console.log('******** FRONT END userAuthLogIn ENDED ********');
  return serverHashData;
}





const serverUI = {
  serverTest: serverTest,
  userAuthSignUp: userAuthSignUp,
  userAuthLogIn: userAuthLogIn,

  //insert more serveUI KVPs
}
export default serverUI;