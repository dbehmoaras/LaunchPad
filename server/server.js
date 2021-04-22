const express = require('express');
const serverApp = express();
const path = require('path');
const cookieParser = require('cookie-parser');

//require in the serverRouteStrings from the client
const serverRouteStrings = require('./../client/constants/serverRouteStrings.js');
// console.log(serverRouteStrings);

//require in all necessary routers
const testRouter = require('./routes/testRoutes.js');
const userAuthRouter = require('./routes/userAuthRoutes.js');

serverApp.use(express.json());
serverApp.use(express.urlencoded({ extended: true }));
serverApp.use(cookieParser());

//connect external / auxiliary routers to the serverApp
serverApp.use(serverRouteStrings.SRV_Test, testRouter);
serverApp.use(serverRouteStrings.SRV_UserAuth, userAuthRouter);


//main server route. customize as needed
const welcomeToServer = 'WELCOME TO SERVER'
serverApp.get(serverRouteStrings.SRV_Main, (req,res) => {
  return res.status(200).send(welcomeToServer);
})



if (process.env.NODE_ENV === 'production'){
  //statically serve everything in the build folder on the route '/build'
  serverApp.use('/build', express.static(path.join(__dirname,'../build')));
  //serve index.html on the route '/'
  serverApp.get('/', (req,res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });
}

/**
 * 404 handler
 */
serverApp.use('*', (req, res) => {
  return res.status(404).send('********** GLOBAL BAD REQUEST / 404 ERROR **********');
});

/**
 * Global error handler
 */
serverApp.use((err, req, res, next) => {
  console.log(err);
  return res.status(500).send('********** GLOBAL INTERNAL SERVER / 500 ERROR **********');
});

serverApp.listen(4000) //listens on port 3000

// module.exports = serverApp; uncomment when building for TTD