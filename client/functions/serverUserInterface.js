import * as serverRoutes from './../constants/serverRouteStrings.js';

// require in axios from 'axios';
const axios = require('axios');
//import the server routes
// import * as serverRoutes from './../constants/serverRouteStrings.js'
// console.log(serverRoutes.SRV_LEADERS_TEST)
//server user functions: sign up, login, and get secret

//function tests access to the server. should return a simple object
const serverTest = () => {
  console.log('******** FRONT END SERVER TEST FIRED ********');
  axios.get(serverRoutes.SRV_Test)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
  console.log('******** FRONT END SERVER TEST ENDED ********');
}

const userAuthSignUp = (signUpInput) => {
  console.log('******** FRONT END userAuthSignUp FIRED ********');
  axios.post(serverRoutes.SRV_UserAuth_SignUp, signUpInput)
    .then(() => {
      //this is where you want to send back the cookie and/or secret
      //need more middleware on the server
      console.log('userAuthSignUp post successful. replace this log with cookie')
    })
    .catch((err) =>{
      console.log(err);
    });
  console.log('******** FRONT END userAuthSignUp ENDED ********');
}








const serverUI = {
  serverTest: serverTest,
  userAuthSignUp: userAuthSignUp,

  //insert more serveUI KVPs
}
export default serverUI;