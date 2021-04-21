const express = require('express');
const serverApp = express();
const path = require('path');

//require in the serverRouteStrings from the client
const serverRouteStrings = require('./../client/constants/serverRouteStrings.js');
// console.log(serverRouteStrings);

//require in all necessary routers
const testRouter = require('./routes/testRoutes.js');

serverApp.use(express.json());
serverApp.use(express.urlencoded({ extended: true }));

//connect external / auxiliary routers to the serverApp
serverApp.use(serverRouteStrings.SRV_Test, testRouter);

// const testObj = [
//   {name: 'David', age: 29 },
//   {name: 'Lucy', age: 29}
// ]


//main server route. customize as needed
const welcomeToServer = 'WELCOME TO SERVER'
serverApp.get(serverRouteStrings.SRV_Main,(req,res) => {
  return res.status(200).send(welcomeToServer);
})





// serverApp.get(serverRouteStrings.SRV_Test,(req,res) => {
//   return res.status(200).send(testObj);
// })


if (process.env.NODE_ENV === 'production'){
  //statically serve everything in the build folder on the route '/build'
  serverApp.use('/build', express.static(path.join(__dirname,'../build')));
  //serve index.html on the route '/'
  serverApp.get('/', (req,res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });
}

serverApp.listen(4000) //listens on port 3000

// module.exports = serverApp; uncomment when building for TTD