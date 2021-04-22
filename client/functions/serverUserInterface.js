import * as serverRoutes from './../constants/serverRouteStrings.js';

// require in axios from 'axios';
const axios = require('axios');
//import the server routes
// import * as serverRoutes from './../constants/serverRouteStrings.js'
// console.log(serverRoutes.SRV_LEADERS_TEST)
//server user functions: sign up, login, and get secret

//function tests access to the server. should return a simple object
const serverTest = () => {
  console.log('******* SERVER TEST FIRED ********')
  axios.get(serverRoutes.SRV_Test)
    .then((data) =>{
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    })
    console.log('******* SERVER TEST ENDED ********')
}



const serverUI = {
  serverTest: serverTest,

}

export default serverUI;