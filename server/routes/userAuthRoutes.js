const express = require('express');
const userAuthRouter = express.Router();
const path = require('path');

//require in the userController
const userController = require('./../controllers/userAuthControl/userController.js');

//main route for the userAuth route handler.
const welcomeToUserAuth = 'Welcome To User Authentication\nFeel free to customize the main route as needed';
userAuthRouter.get('/', (req,res) => {
  return res.status(200).send(welcomeToUserAuth);
})

userAuthRouter.post(
  '/signUp',
  userController.signUp,
  (req,res) => {
  return res.status(200).send('userAuthRoutes.post USER SIGNED UP');
})


//add login route

//add more toures below



module.exports = userAuthRouter;