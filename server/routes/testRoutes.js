const express = require('express');
const testRouter = express.Router();
const path = require('path');

// const clientToServer = require('./../../client/constants/serverRouteStrings.js');


// import * as clientToServer from './../client/constants/serverRouteStrings.js'
// const serverRouteStrings = require('./../../client/constants/serverRouteStrings.js')

const testObj = [
  {name: 'David', age: 29 },
  {name: 'Lucy', age: 29}
];

// testRouter.get(clientToServer.SRV_Test,(req,res) => {
//   return res.status(200).send(testObj);
// })

testRouter.get('/',(req,res) => {
  return res.status(200).send(testObj);
})



module.exports = testRouter;